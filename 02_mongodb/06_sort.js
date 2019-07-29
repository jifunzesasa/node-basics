const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;

    const dbo = db.db("node_basics");
    const sort = { name: 1 };

    dbo.collection("customers").find().sort(sort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

});
