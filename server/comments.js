const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const commentsSchema = new mongoose.Schema({
  name: String,
  photoID: String,
  comment: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Comment = mongoose.model('Comment', commentsSchema);

// upload comment
router.post('/', async (req, res) => {
  if (!req.body.comment)
    return res.status(400).send({
      message: "Comment required"
    });

  try {

    const comment = new Comment({
      name: req.body.name,
      photoID: req.body.photoID,
      comment: req.body.comment
    });
    await comment.save();

    let everything = await Comment.find({
      photoID: req.params.id
    }).sort({
      created: -1
    });

    return res.send(everything);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get photo comments
router.get("/:id", async (req, res) => {
  try {
    let comments = await Comment.find({
      photoID: req.params.id
    }).sort({
      created: -1
    });

    return res.send(comments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Comment,
  routes: router,
}
