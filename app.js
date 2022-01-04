const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./route/blogRoutes");

const app = express();

// CONNECT TO MONGODB
const dbURI =
   

// MONGOOSE CONNECT IT TO THE DB
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000, (req, res) =>
            console.log("connected to db and now listening")
        );
    })
    .catch((err) => console.log(err));

// REGISTER VIEW ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE & STATIC FILES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // allow us to use `req.body`
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// BLOG ROUTES
app.use("/blogs", blogRoutes);

// 404 PAGE
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
