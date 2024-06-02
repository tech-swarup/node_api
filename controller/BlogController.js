const Blog=require('../model/BlogModel')

const getBlog=async(req,res)=>{
    Blog.find() .then((documents) => {
        console.log(documents);
        return res.status(201).json({
            message: 'Post fetching',
            posts: documents
        });
    })
    .catch(err => {
        return res.status(201).json({ error: 'Issue in fetching' });
    });
}

const postBlog = async (req, res) => {
    try {
        const Blogdata = new Blog({
            title: req.body.title,
            content: req.body.content
        });
        await Blogdata.save().then(result => {
            return res.send({ msg: "Blog created" })
        })
    }
    catch (error) {
        console.log(error);
    }
}

module.exports={
    getBlog,
    postBlog,
}