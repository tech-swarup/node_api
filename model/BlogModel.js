const mongoose=require('mongoose')
const Schema=mongoose.Schema

const blogSchema= new Schema({
    title:{ type:String, required:true },
    content:{ type:String, required:true },
    status:{ type:Number, default:1 },
})

const blogModel=mongoose.model("blog", blogSchema)
module.exports=blogModel