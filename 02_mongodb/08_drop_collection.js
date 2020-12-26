const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;

    const dbo = db.db("node_basics");
    dbo.collection("customers").drop().then(() => console.log("Collection deleted"));
    db.close();

});
