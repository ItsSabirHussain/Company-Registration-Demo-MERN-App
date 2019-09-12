const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const user = new Schema({
  FullName: {
    type: String,
  },
  CIty: {
    type: String,
  },
  Country: {
    type: String,
  },
  ID: {
    type: String,
    required: true
  },
  Key: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("user", user);