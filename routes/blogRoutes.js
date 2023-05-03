const express = require("express");

const { getallblog, createblog, deleteblog, updateblog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getallblog);
router.post("/create", createblog);
router.post("/delete/:id", deleteblog);
router.post("/update/:id", updateblog);

module.exports = router;