const Blog   = require("../models/Blog.js");


const getallblog =async (req, res) => {

    const all_blog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": all_blog
    })
   
}


const createblog = async (req, res) => {

    try{
        const blog = await Blog.create(req.body);
        res.status(200).json({
            "message": 'Blog added successfully',
            "blog_id": blog._id,
            "status": 'success'
        });
    }catch(err){
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        });
    }
}


const deleteblog = async (req, res) => {

    const id = req.params.id;

    const blog = await Blog.findById(id);
    if(!blog)
    {
        res.status(403).json({
            "status": 'fail',
            "message": "Given Blog doesnot exist"
        })
    }

    try{
        await Blog.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Blog deleted successfully'
        });
    }catch(err){
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        })
    }
}


/*

updateblog Controller


1. update the blog with given id in req.params.
2. update that field that is present in req.body.

req.body = {
    heading : "xyz",
    body : "xyz",
    tags : "xyz"
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

403 Status Code
json = {
    "status": 'fail',
    "message": 'Given Blog doesnot exist'
}

3. Something went wrong

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

*/

const updateblog = async (req, res) => {

    //Write ypur code here.

}

module.exports = { getallblog, createblog, deleteblog, updateblog };