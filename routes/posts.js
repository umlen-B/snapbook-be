const express = require("express");
const { getPosts, createPosts, editPosts } = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/", editPosts);

module.exports = router;
