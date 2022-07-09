const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId
        },
        username: {
            type: String,
            required: true
        },
        reactionBody: {
            type: String,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;