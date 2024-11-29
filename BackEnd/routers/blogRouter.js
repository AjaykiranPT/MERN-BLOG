const express = require('express');
const { addBlog } = require('../controllers/blogController.js');

const blogRouter = express.Router();

userRouter.get('/addBlog', addBlog);

module.exports = blogRouter;
