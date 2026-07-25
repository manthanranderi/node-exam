const express = require("express");

const router = express.Router();

const categoryController = require("../controllers/categoryController");
const auth = require("../middleware/auth");

// Category Dashboard
router.get(
    "/",
    auth.verifyToken,
    auth.isAdmin,
    categoryController.showCategory
);

// Add Category
router.post(
    "/add",
    auth.verifyToken,
    auth.isAdmin,
    categoryController.addCategory
);

// Edit Category
router.post(
    "/edit/:id",
    auth.verifyToken,
    auth.isAdmin,
    categoryController.editCategory
);

// Delete Category
router.get(
    "/delete/:id",
    auth.verifyToken,
    auth.isAdmin,
    categoryController.deleteCategory
);

module.exports = router;