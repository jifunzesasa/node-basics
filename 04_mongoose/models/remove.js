const mongoose = require('mongoose');

// Coonec to DB
mongoose.connect('mongodb://localhost:27017/basics', { useNewUrlParser: true }, () => {
    console.log('MongoDb Connected...');
});

// Schema
const schema = new mongoose.Schema({
    name: 'string',
    size: 'string'
});
const Tank = mongoose.model('Tank', schema);


// #1 simple callback function
// Tank.remove({ size: 'large' }, function (err) {
//     if (err) return handleError(err);
//     // removed!
// });

// #2 Lambda function
// Tank.remove({ size: 'large' }, (err) => { if (err) return handleError(err); });

// #3 Promises
// Use deleteOne, deleteMany, or bulkWrite instead.
Tank.deleteMany({ size: 'large' }).then(doc => console.log(doc)).catch(err => console.log(err));