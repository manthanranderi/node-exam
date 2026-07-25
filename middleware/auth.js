const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (err) {

        return res.redirect("/login");

    }

};
exports.isAdmin = (req, res, next) => {

    if (req.user.role === "admin") {

        next();

    } else {

        res.send("Only Admin Can Access");

    }

};
exports.isUser = (req, res, next) => {

    if (req.user.role === "user") {

        next();

    } else {

        res.send("Only User Can Access");

    }

};