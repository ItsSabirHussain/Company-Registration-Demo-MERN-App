const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const passport2 = require("passport");
const admin = require("./routes/admin");
const user = require("./routes/user");
const cors = require("cors");
const path = require("path");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL || db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
app.use(passport2.initialize());

// Passport config
require("./config/passport")(passport);
require("./config/passport2");

// Server configurations
if (process.env.NODE_ENV === "production") {
  app.use(express.static("cliend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "cliend", "build", "index.html"));
  });
}

// Routes
app.use("/", admin);
app.use("/", user);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
