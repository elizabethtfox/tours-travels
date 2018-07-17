const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema ({
    category: { type: String, required: true },
    items: String,
    date: { type: Date, default: Date.now }
});

const List = mongoose.model("List", listSchema);

module.exports = List;