const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    image: { type: Array, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
});

const Collection = mongoose.model('Image', collectionSchema);

module.exports = Collection;
