const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tag: String,
  slectedFile: String,
  imageUrl: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("SnapItem", postSchema);

module.exports = PostMessage;
