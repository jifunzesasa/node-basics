const User = new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer
});

// a setter
User.path('name').set(function (v) {
    return capitalize(v);
});

// middleware
User.pre('save', function (next) {
    console.log('Email sent ..')
    // notify(this.get('email'));
    next();
});