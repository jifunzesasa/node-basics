const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("node_basics");
    dbo.collection('orders').aggregate([
        {
            $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'order_details'
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
