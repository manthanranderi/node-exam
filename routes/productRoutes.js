const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

const auth = require("../middleware/auth");

router.get("/", auth.verifyToken, productController.showProducts);

router.get("/add", auth.verifyToken, productController.addPage);

router.post("/add", auth.verifyToken, productController.addProduct);

router.get("/edit/:id", auth.verifyToken, productController.editPage);

router.post("/edit/:id", auth.verifyToken, productController.updateProduct);

router.get("/delete/:id", auth.verifyToken, productController.deleteProduct);

router.get("/my-products", auth.verifyToken, productController.myProducts);

module.exports = router;