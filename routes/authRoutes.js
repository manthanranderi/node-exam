const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/register", authController.registerPage);

router.post("/register", authController.register);

router.get("/login", authController.loginPage);

router.post("/login", authController.login);

router.get("/logout", authController.logout);

module.exports = router;