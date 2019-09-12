const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateUserRegistration = require("../validation/userregistration");
const validateUserLogin = require("../validation/userlogin");
// Load User model
const User = require("../models/user");
const Company = require("../models/company")

// @route POST /userregistration
// @desc Register user
// @access Public
router.post("/userregistration", (req, res) => {
    // Form validation
  const { errors, isValid } = validateUserRegistration(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ ID: req.body.ID }).then(user => {
      if (user) {
        return res.status(400).json({ ID: "ID already exists" });
      } else {
        const newUser = new User({
          FullName: req.body.FullName,
          City: req.body.City,
          Country: req.body.Country,
          ID: req.body.ID,
          Key: req.body.Key
        });
  // Hash key before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.Key, salt, (err, hash) => {
              console.log(err)
            if (err) throw err;
            newUser.Key = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST /userlogin
// @desc Login user and return JWT token
// @access Public
router.post("/userlogin", (req, res) => {
    // Form validation
  const { errors, isValid } = validateUserLogin(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const ID = req.body.ID;
  const Key = req.body.Key;
  // Find user by id
    User.findOne({ ID: req.body.ID }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ IDNotFound: "ID not found" });
      }
  // Check password
      bcrypt.compare(Key, user.Key).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            ID: user.ID
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
            .json({ keyincorrect: "Key incorrect" });
        }
      });
    });
  });

// @route POST /companyregistration
// @desc Register user
// @access Public
router.post("/companyregistration", (req, res) => {
  User.findOne({ CompanyName: req.body.CompanyName }).then(user => {
    if (user) {
      return res.status(400).json({ CompanyName: "CompanyName already exists" });
    } else {
      const newCompany = new Company({
        ACN: this.state.ACN,
        UserID: this.state.UserID,
        CompanyName: this.state.CompanyName,
        City: this.state.City,
        Country: this.state.Country,
        Email: this.state.Email,
        Phone: this.state.Phone,
        Status: this.state.Status,
        CEO: this.state.CEO,
        Type: this.state.Type
    })
    newCompany
      .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
    }
  });
});

router.post("/search", (req, res) => {
  User.findOne({ CompanyName: req.body.CompanyName }).then(user => {
    if (user) {
      return res.json({ Check: true });
    } else {
      return res.json({ Chck: true });
    }
  });
});

  module.exports = router;
