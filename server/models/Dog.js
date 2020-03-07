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
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    createdDate: {
        type: Date,
        default: Date.now,
    },
});

CatSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    return CatModel.findOne(search, callback);
};

DogModel = mongoose.model("Dog", DogSchema);

module.exports = {
    DogModel,
    DogSchema,
}