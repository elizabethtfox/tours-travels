const mongoose = require("mongoose");
const db = require("../models");

// This file empties the List collection and inserts the items below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactpackinglist"
);

const listSeed = [
    {
        item: "Toothbrush",
        date: new Date(Date.now())
    }
];

db.List
    .remove({})
    .then(() => db.List.collection.insertMany(listSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
process.exit(0);
})
.catch(err => {
    console.error(err);
process.exit(1);
});
