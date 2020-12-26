const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;

    const dbo = db.db("node_basics");
    const query = { address: "Alpha" };

    dbo.collection("customers").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
