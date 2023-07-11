const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://sharu:Sharu369@gatimandsharu.djnwo4s.mongodb.net/notes?retryWrites=true&w=majority")
module.exports = connection