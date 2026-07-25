const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);