const Product = require("../models/product");
const Category = require("../models/category");
const User = require("../models/user");

// Show All Products
exports.showProducts = async (req, res) => {

    const products = await Product.find();

    const productData = [];

    for (let i = 0; i < products.length; i++) {

        const category = await Category.findById(products[i].category);

        const user = await User.findById(products[i].user);

        productData.push({
            _id: products[i]._id,
            productName: products[i].productName,
            price: products[i].price,
            description: products[i].description,
            categoryName: category ? category.categoryName : "",
            username: user ? user.username : ""
        });

    }

    res.render("productList", { products: productData });

};

// Add Product Page
exports.addPage = async (req, res) => {

    const categories = await Category.find();

    res.render("productForm", {
        categories,
        product: null
    });

};

// Save Product
exports.addProduct = async (req, res) => {

    const { productName, price, description, category } = req.body;

    await Product.create({
        productName,
        price,
        description,
        category,
        user: req.user.id
    });

    res.redirect("/products");

};

// Edit Page
exports.editPage = async (req, res) => {

    const product = await Product.findById(req.params.id);

    const categories = await Category.find();

    res.render("productForm", {
        product,
        categories
    });

};

// Update Product
exports.updateProduct = async (req, res) => {

    const { productName, price, description, category } = req.body;

    await Product.findByIdAndUpdate(req.params.id, {
        productName,
        price,
        description,
        category
    });

    res.redirect("/products");

};

// Delete Product
exports.deleteProduct = async (req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.redirect("/products");

};

// My Products
exports.myProducts = async (req, res) => {

    const products = await Product.find({ user: req.user.id });

    const productData = [];

    for (let i = 0; i < products.length; i++) {

        const category = await Category.findById(products[i].category);

        productData.push({
            _id: products[i]._id,
            productName: products[i].productName,
            price: products[i].price,
            description: products[i].description,
            categoryName: category ? category.categoryName : ""
        });

    }

    res.render("myProducts", { products: productData });

};