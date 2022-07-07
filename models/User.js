const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [],
    friends: []
});

// create User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;
