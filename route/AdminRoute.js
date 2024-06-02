const express = require('express')
const Route=express.Router()

const AdminBlogController=require('../controller/BlogController')

// ***blog routes***
Route.get('/blog', AdminBlogController.getBlog)
Route.post('/blogadd', AdminBlogController.postBlog)

module.exports=Route