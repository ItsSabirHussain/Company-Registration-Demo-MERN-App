const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("../config/passport")
// Load input validation
const validateAdminRegistration = require("../validation/adminregistration");
const validateAdminLogin = require("../validation/adminlogin");
// Load User model
const Admin = require("../models/admin");


// @route POST /adminregisteration
// @desc Register user
// @access Public
router.post("/adminregistration", (req, res) => {
    // Form validation
  const { errors, isValid } = validateAdminRegistration(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

   
  Admin.findOne({ ID: req.body.ID }).then(admin => {
      if (admin) {
        return res.status(400).json({ ID: "ID already exists" });
      } else {
        const newAdmin = new Admin({
          FullName: req.body.FullName,
          OfficeID: req.body.OfficeID,
          ID: req.body.ID,
          Key: req.body.Key
        });
  // Hash key before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newAdmin.Key, salt, (err, hash) => {
              console.log(err)
            if (err) throw err;
            newAdmin.Key = hash;
            newAdmin
              .save()
              .then(admin => res.json(newAdmin))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route POST /adminlogin
// @desc Login admin and return JWT token
// @access Public
router.post("/adminlogin", (req, res) => {
    // Form validation
  const { errors, isValid } = validateAdminLogin(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const ID = req.body.ID;
  const Key = req.body.Key;
  // Find admin by id
    Admin.findOne({ ID: req.body.ID }).then(admin => {
      // Check if admin exists
      if (!admin) {
        return res.status(404).json({ IDNotFound: "Email not found" });
      }
  // Check password
      bcrypt.compare(Key, admin.Key).then(isMatch => {
        if (isMatch) {
          // Admin matched
          // Create JWT Payload
          const payload = {
            id: admin.id,
            ID: admin.ID
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Key incorrect" });
        }
      });
    });
  });


  module.exports = router;
