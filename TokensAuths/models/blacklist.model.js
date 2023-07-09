const {Schema,model } = require("mongoose")

const blacklistSchema = Schema({
    token : [String]
})

const BlackListModel = model("blacklist",blacklistSchema);