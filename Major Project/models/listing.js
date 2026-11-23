const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1464069668014-99e9cd4abf16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    image: {
        default: DEFAULT_IMAGE,
        type: String,
        set: (v) => v === "" ? DEFAULT_IMAGE : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model('Listing', listingSchema); // Create a model named 'Listing' using the listingSchema AND export it so that it can be used in other files
module.exports = Listing;