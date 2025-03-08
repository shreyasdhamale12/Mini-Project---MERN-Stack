const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miniProject');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    profilepic:{
        type: String,
        default: 'default.jpg'
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
}); 

module.exports = mongoose.model('user', userSchema);