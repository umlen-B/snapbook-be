require("dotenv").config();
var cloudinary = require("cloudinary").v2;

const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const snapItems = await PostMessage.find();
    console.log("snapItems", snapItems);
    // res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send(snapItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPosts = async (req, res) => {
  // console.log("createPosts req", req);
  try {
    const post = req.body;
    const file = req.files.selectedFile;
    console.log(file);
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "snapbook/posts",
    });
    post.selectedFile = result.public_id;
    post.imageUrl = result.secure_url;
    console.log("post", post);
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const editPosts = async (req, res) => {
  res.send("edit Hols");
};

exports.getPosts = getPosts;
exports.createPosts = createPosts;
exports.editPosts = editPosts;
