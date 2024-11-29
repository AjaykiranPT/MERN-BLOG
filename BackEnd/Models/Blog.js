const mongoose = require('mongoose');

// Schema
const BlogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Description: { type: String, required: true },
    author: { type: String, required: true },
});

const Blog = mongoose.model('users', BlogSchema);

module.exports = Blog;
