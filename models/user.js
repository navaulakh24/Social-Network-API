const { Schema, model } = require('mongoose');

// schema for user model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
        minlength: 5
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using the userSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;