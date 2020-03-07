const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    breed: {
        type: String,
    },

    age: {
        type: Number,
    },

    createdDate: {
        type: Date,
    },
});