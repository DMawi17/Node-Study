const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { render } = require("ejs");

const app = express();

// CONNECT TO MONGODB
const dbURI =
    "mongodb+srv://DMawi:XeSk0O6r2Y6DbgSR@cluster0.r2jkf.mongodb.net/node-study?retryWrites=true&w=majority";

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
app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

app.post("/blogs", (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => res.redirect("/blogs"))
        .catch((err) => console.log(err));
});

app.get("/blogs/:aydi", (req, res) => {
    const id = req.params.aydi; // extract the id
    Blog.findById(id)
        .then((result) =>
            res.render("details", { blog: result, title: "Blog Details" })
        )
        .catch((err) => console.log(err));
});

app.delete("/blogs/:id", (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => res.json({ redirect: "/blogs" }))
        .catch((err) => console.log(err));
});

app.get("/blogs", (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 }) // reverse order with -1
        .then((result) =>
            res.render("index", {
                title: "All Blogs",
                blogs: result,
            })
        )
        .catch((err) => console.log(err));
});

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
