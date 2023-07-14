require("dotenv").config();
const mongourl = process.env.MONGOURL;
const mongoose = require("mongoose");
const connection = mongoose.connect(mongourl);
module.exports = connection;
