const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;

    const dbo = db.db("node_basics");
    const query = { address: 'Mountain 21' };

    dbo.collection("customers").deleteOne(query, function (err) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });

});
