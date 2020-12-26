const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("node_basics");
    dbo.collection("customers").find().limit(5).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
