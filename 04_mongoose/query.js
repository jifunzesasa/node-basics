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



// Querying

// Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);

Tank.find({ size: 'large' }).then(doc => console.log(doc));
