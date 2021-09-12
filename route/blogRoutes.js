const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

// BLOG ROUTES
router.get("/create", (req, res) => {
    // has to be at the top
    res.render("create", { title: "Create a new blog" });
});

router.post("/", (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => res.redirect("/blogs"))
        .catch((err) => console.log(err));
});

router.get("/:aydi", (req, res) => {
    const id = req.params.aydi; // extract the id
    Blog.findById(id)
        .then((result) =>
            res.render("details", { blog: result, title: "Blog Details" })
        )
        .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => res.json({ redirect: "/blogs" }))
        .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
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

module.exports = router;
