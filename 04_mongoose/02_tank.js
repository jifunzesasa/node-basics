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


// Lil tank Object
const smallTank = { name: 'lil tank', size: 'small' };

// New Lil tank Moongose model
const small = new Tank(smallTank);
small.save(function (err) {
    if (err) return handleError(err);
    console.log('lil tank saved');
})



Tank.create({ name: 'Father tank', size: 'big' }, function (err, doc) {
    if (err) return handleError(err);
    console.log('Father tank saved');
})

function handleError(err) {
    console.error('Error:' + err);
}



// mongoose.connection.close();