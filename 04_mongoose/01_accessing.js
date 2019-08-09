const mongoose = require('mongoose');
const UserSchema = require('./models/user');
const User = mongoose.model('User', UserSchema);




mongoose.connect('mongodb://localhost:27017/basics', { useNewUrlParser: true }, () => {
    console.log('MongoDb Connected...');
});



// // You can also findOne, findById, update,
// User.find({}, function (err, docs) {
//     // docs.forEach
// });

// create a blog post
var alpha = new User();

// create a comment
post.comments.push({ title: 'My comment' });

post.save(function (err) {
    if (!err) console.log('Success!');
});



// mongoose.connection.close();