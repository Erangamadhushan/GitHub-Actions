const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: [0, 'Age must be a positive number']
    }
});

UserSchema.index({ email: 1 }); // Create an index on the email field for faster queries

module.exports = mongoose.model('User', UserSchema);

