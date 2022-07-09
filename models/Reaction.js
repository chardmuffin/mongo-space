const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId
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
            default: Date.now
        }
    }
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;