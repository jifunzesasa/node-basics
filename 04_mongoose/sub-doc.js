const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/basics', { useNewUrlParser: true }, () => {
    console.log('MongoDb Connected...');
});

var childSchema = new mongoose.Schema({
    name: 'string'
});
// Subdocuments have save and validate middleware just like top-level documents. 
childSchema.pre('save', function (next) {
    if ('invalid' == this.name) {
        return next(new Error('#sadpanda'));
    }
    next();
});


var parentSchema = new mongoose.Schema({
    // Array of subdocuments
    children: [childSchema],
    // Single nested subdocuments. Caveat: single nested subdocs only work
    // in mongoose >= 4.2.0
    child: childSchema
});



var Parent = mongoose.model('Parent', parentSchema);
var parent = new Parent({
    children: [{
        name: 'Matt'
    }, {
        name: 'Sarah'
    }]
})
parent.children[0].name = 'Matthew';

// `parent.children[0].save()` is a no-op, it triggers middleware but
// does **not** actually save the subdocument. You need to save the parent doc.
parent.save((doc, err) => {
    if (err) console.log(err)
    console.log(doc)
});


// Finding a sub-document
var child = parent.children.id(_id);



// Adding sub-docs to arrays
var Parent = mongoose.model('Parent');
var parent = new Parent;

// create a comment
parent.children.push({ name: 'Liesl' });
var subdoc = parent.children[0];
console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
subdoc.isNew; // true

parent.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
});



// Sub-docs may also be created without adding them to the array by using the create method of MongooseArrays.

var newdoc = parent.children.create({ name: 'Aaron' });


// Removing subdocs
// Equivalent to `parent.children.pull(_id)`
parent.children.id(_id).remove();
// Equivalent to `parent.child = null`
parent.child.remove();
parent.save(function (err) {
    if (err) return handleError(err);
    console.log('the subdocs were removed');
});