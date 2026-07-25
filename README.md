# 🛒 E-Commerce Management System

A simple **E-Commerce Management System** built using **Node.js, Express.js, MongoDB, EJS, Bootstrap, JWT, and Cookie Parser**. This project demonstrates authentication, role-based access, and CRUD operations for Products and Categories.

---

## 📌 Features

- User Registration
- User Login
- JWT Authentication
- Cookie-based Authentication
- Role-Based Access (Admin/User)
- Product CRUD
- Category CRUD
- My Products Page
- Responsive Bootstrap UI
- MongoDB Database
- MVC Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap 5
- JWT
- bcrypt
- Cookie Parser

---

## 📂 Project Structure

```
ecommarce
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── productController.js
│   └── categoryController.js
│
├── middleware
│   └── auth.js
│
├── models
│   ├── user.js
│   ├── product.js
│   └── category.js
│
├── public
│   └── css
│
├── routes
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── categoryRoutes.js
│
├── views
│   ├── partials
│   │   └── navbar.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── productList.ejs
│   ├── productForm.ejs
│   ├── productItem.ejs
│   ├── myProducts.ejs
│   └── categoryList.ejs
│
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project folder

```bash
cd ecommarce
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=9000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start the project

```bash
npm start
```

For development

```bash
npm run dev
```

---

## 👤 User Roles

### Admin

- Manage Categories
- Manage Products
- View All Products

### User

- Login
- Add Products
- View My Products

---

## 🔐 Authentication

- Password hashing using **bcrypt**
- JWT Token Generation
- Cookie-based Authentication
- Protected Routes
- Role-based Middleware

---

## 📸 Screens

- Login
- Register
- Product Dashboard
- Category Dashboard
- My Products

---

## 📦 Dependencies

- express
- mongoose
- ejs
- dotenv
- bcrypt
- jsonwebtoken
- cookie-parser
- body-parser
- nodemon

---

## 🚀 Future Improvements

- Product Image Upload
- Search Products
- Pagination
- User Profile
- Dashboard Analytics

---

## 👨‍💻 Author

**Amit Rana**

BCA Final Year Project

---

## 📄 License

This project is created for educational and learning purposes.
