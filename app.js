const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app
const app = express();

// ... connect to mongoDB
const dbURI =
    "mongodb+srv://DMawi:aogSekiNOK7GbP4R@cluster0.r2jkf.mongodb.net/node-study?retryWrites=true&w=majority";

//... mongoose to connect to database
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // console.log("connected to db");
        app.listen(3000, (req, res) =>
            console.log("connected to db and now listening")
        );
    })
    .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// 3rd party middleware
app.use(morgan("dev"));

// Static Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    const blogs = [
        {
            title: "Yoshi finds eggs",
            snippet: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            title: "Mario finds stars",
            snippet: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            title: "How to defeat bowser",
            snippet: "Lorem ipsum dolor sit amet consectetur",
        },
    ];
    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
