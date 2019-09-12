const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const company = new Schema({
  ACN: {
    type: String
  },
  UserID: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  City: {
    type: String
  },
  Country: {
    type: String,
  },
  Email: {
    type: String
  },
  Phone: {
    type: String
  },
  CEO: {
    type: String
  },
  Type: {
    type: String
  }
});
module.exports = User = mongoose.model("company", company);