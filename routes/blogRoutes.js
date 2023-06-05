const express = require("express");

const { getAllBlog, createBlog, deleteBlog, updateBlog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getAllBlog);
router.post("/create", createBlog);
router.delete("/delete/:id", deleteBlog);
router.patch("/update/:id", updateBlog);

module.exports = router;
