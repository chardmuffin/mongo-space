const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [ this ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;
