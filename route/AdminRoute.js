const express = require('express')
const Route=express.Router()

const AdminBlogController=require('../controller/BlogController')

// ***blog routes***
Route.get('/blog', AdminBlogController.getBlog)
Route.post('/blogadd', AdminBlogController.postBlog)

// Search
Route.get("/blog/:id", AdminBlogController.searchBlog)

// Update
Route.put("/blog_edit/:id", AdminBlogController.updateBlog);

// Delete
Route.delete("/blog/:id", AdminBlogController.deleteBlog);

module.exports=Route