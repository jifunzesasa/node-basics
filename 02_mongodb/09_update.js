const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;

    const dbo = db.db("node_basics");

    const query = { address: "Valley 345" };
    const newObject = { $set: { name: "Mickey", address: "Canyon 123" } };

    dbo.collection("customers").updateOne(query, newObject, function (err) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });

});
