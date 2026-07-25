const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerPage = (req, res) => {
    res.render("register");
};

exports.loginPage = (req, res) => {
    res.render("login");
};

exports.register = async (req, res) => {

    try {

        const { username, email, password, role } = req.body;

        const checkUser = await User.findOne({ email });

        if (checkUser) {
            return res.send("Email already exists");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashPassword,
            role
        });

        await user.save();

        res.redirect("/login");

    } catch (err) {
        console.log(err);
    }

};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.send("User not found");
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.send("Password incorrect");
        }

        const token = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET

        );

        res.cookie("token", token);

        res.redirect("/products");

    } catch (err) {

        console.log(err);

    }

};

exports.logout = (req, res) => {

    res.clearCookie("token");

    res.redirect("/login");

};