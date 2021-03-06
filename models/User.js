const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  point:{
    type:Number,
    default:10000
  }
  
  // list : [
  //   info: {
  //     person : String,

  //   },
  // ]
});
module.exports = User = mongoose.model("users", UserSchema);