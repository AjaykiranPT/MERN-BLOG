const User = require('../Models/Blog.js');



const addBlog = async (req, res) => {
    try {
        const blogItem = {
            name: req.body.name,
            Description: req.body.Description,
            author: req.body.author,
        };

        const blog = new Blog(blogItem); 
        await blog.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = { addBlog};
