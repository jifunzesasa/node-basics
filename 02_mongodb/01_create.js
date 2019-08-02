const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/node_basics";

let mongoClient = MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("Database Created!");
    db.close();
});
