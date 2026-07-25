const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require("path");

dotenv.config();

const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");

// Global User
app.use((req, res, next) => {

    const token = req.cookies.token;

    if (token) {

        try {

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            res.locals.user = decoded;

            req.user = decoded;

        } catch (err) {

            res.locals.user = null;

        }

    } else {

        res.locals.user = null;

    }

    next();

});

// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));

// Server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});