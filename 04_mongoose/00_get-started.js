const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/basics', { useNewUrlParser: true }, () => {
    console.log('MongoDb Connected...');
});

mongoose.connection.close();