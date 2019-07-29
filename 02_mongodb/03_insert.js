const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("node_basics");
    const company = { name: "Alpha Company Inc", address: "Highway 37" };

    dbo.collection("customers").insertOne(company, function (err) {
        if (err) throw err;
        console.log(company);
        console.log("1 document inserted");
        db.close();
    });
});
