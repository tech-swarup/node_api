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

// Search a specific post
const searchBlog = async (req, res) => {
    try {
        Blog.findById(req.params.id).then(document => {
            if (document) {
                res.status(200).json(document);
            } else {
                res.status(404).json({
                    messages: 'Blog not found',
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Update a specific Post
const updateBlog = async (req, res) => { 
    try {
        const itemId = req.params.id;
        const { title, content } = req.body;

        const updatedItem = await Blog.findByIdAndUpdate(itemId, {title, content}, { new: true });
        if (!updatedItem) {
            return res.status(404).send({ error: 'Item not found' });
        } else {
            res.status(201).json({
                message: 'Record updated successfully',
            });
        }

    } catch(error) {
        console.log(error)
    }
}

// Delete a Post
const deleteBlog = async (req, res) => { 
    try {
        await Blog.deleteOne({ _id: req.params.id }).then(result => {
            if(result) {
                console.log(result);
                res.status(200).json({ message: "Blog deleted!" });
            } else {
                res.status(200).json({ message: "Cannot be deleted!" });
            }
        });
    }catch(error) {
        console.log(error);
    }
}

module.exports={
    getBlog,
    postBlog, deleteBlog, updateBlog, searchBlog
}