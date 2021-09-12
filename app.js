const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();
app.set("view engine", "ejs");
app.use(morgan("dev"));

/*
   __  __  ___  _   _  ____  ___  
  |  \/  |/ _ \| \ | |/ ___|/ _ \ 
  | |\/| | | | |  \| | |  _| | | |
  | |  | | |_| | |\  | |_| | |_| |
  |_|  |_|\___/|_| \_|\____|\___/ 
DB AND MONGOOSE
*/

// CONNECT TO MONGODB
const dbURI =
    "mongodb+srv://DMawi:aogSekiNOK7GbP4R@cluster0.r2jkf.mongodb.net/node-study?retryWrites=true&w=majority";

// MONGOOSE CONNECT IT TO THE DB
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // console.log("connected to db");
        app.listen(3000, (req, res) =>
            console.log("connected to db and now listening")
        );
    })
    .catch((err) => console.log(err));

/* // MONGOOSE AND MONGO SANDBOX ROUTES
app.get("/add-blog", (req, res) => {
    // new instance of a blog we imported from blog.js
    const blog = new Blog({
        title: "new blog 2",
        snippet: "about my new blog",
        body: "more about my new blog",
    });

    // SAVE blog TO A DB
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// FINDS ALL BLOGS
app.get("/all-blogs", (req, res) => {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});

//FINDS A SINGLE BLOG
app.get("/single-blog", (req, res) => {
    Blog.findById("613d964887f8f3d0685dbfb4")
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
}); */

// ...

app.use(express.static("public"));

/* app.get("/", (req, res) => {
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
}); */

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// BLOG ROUTES
app.get("/", (req, res) => {
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

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
