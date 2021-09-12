const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

// BLOG ROUTES
router.get("/create", blogController.blog_create_get);
router.post("/", blogController.blog_create_post);
router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);
router.get("/", blogController.blog_index);

module.exports = router;
