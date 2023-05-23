const Blog   = require("../models/blog.js");


const getAllBlog =async (req, res) => {

    const allBlog = await Blog.find({});
    res.status(200).json({
        status: "success",
        data: allBlog
    })
   
}


const createBlog = async (req, res) => {

    try{
        const blog = await Blog.create(req.body);
        res.status(200).json({
            message: 'Blog added successfully',
            blog_id: blog._id,
            status: 'success'
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}


const deleteBlog = async (req, res) => {

    const id = req.params.id;

    const blog = await Blog.findById(id);
    if(!blog)
    {
        res.status(404).json({
            status: 'fail',
            message: "Given Blog doesn't exist"
        })
    }

    try{
        await Blog.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Blog deleted successfully'
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
}

/*

updateblog Controller


1. update the blog with given id in req.params.
2. update that field that is present in req.body.

req.body = {
    heading,
    body, 
    tags
}
req.body can contain any of the given field.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Blog updated successfully'
}

2. Discussion Doesnot exist

404 Status Code
json = {
    status: 'fail',
    message: "Given Blog doesn't exist"
}

3. Something went wrong

500 Status Code
json = {
    status: 'fail',
    message: error message
}

*/

const updateBlog = async (req, res) => {

    //Write ypur code here.

}

module.exports = { getAllBlog, createBlog, deleteBlog, updateBlog };