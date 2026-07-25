const Category = require("../models/category");

// Show Category Dashboard
exports.showCategory = async (req, res) => {

    try {

        const categories = await Category.find();

        res.render("categoryList", {
            categories
        });

    } catch (err) {

        console.log(err);

    }

};

// Add Category
exports.addCategory = async (req, res) => {

    try {

        const { categoryName } = req.body;

        const newCategory = new Category({
            categoryName
        });

        await newCategory.save();

        res.redirect("/categories");

    } catch (err) {

        console.log(err);

    }

};

// Edit Category
exports.editCategory = async (req, res) => {

    try {

        const { categoryName } = req.body;

        await Category.findByIdAndUpdate(req.params.id, {
            categoryName
        });

        res.redirect("/categories");

    } catch (err) {

        console.log(err);

    }

};

// Delete Category
exports.deleteCategory = async (req, res) => {

    try {

        await Category.findByIdAndDelete(req.params.id);

        res.redirect("/categories");

    } catch (err) {

        console.log(err);

    }

};