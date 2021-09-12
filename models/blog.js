const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//1. creating a schema which define the structure.
const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// 2. a model base on the schema and define the model name "Blog" which is the singular of the cluster collection name in mongoDB atlas.
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
