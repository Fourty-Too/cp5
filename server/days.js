const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const users = require("./users.js");
const User = users.model;

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../public/days/',
  limits: {
    fileSize: 10000000
  }
});

const daySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  date: String,
  calorieGoal: Number,
  calorieActual: Number,
});

const Day = mongoose.model('Day', daySchema);

router.post("/", auth.verifyToken, User.verify, upload.single('day'), async (req, res) => {
  // check parameters

  const day = new Day({
    user: req.user,
    path: "/days/" + req.body.date,
    date: req.body.date,
    calorieActual: 0,
    calorieGoal: req.body.calorieGoal,
  });
  try {
    await day.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  try {
    let days = await Day.find({
      user: req.user
    }).sort({
      created: -1
    });
    return res.send(days);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/:id", async(req, res) => {
  try {
    let day = await Day.findOne({"_id": req.params.id}).populate('user');
    return res.send(day);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put("/:id", async(req, res) => {
  try {
    console.log("This was called");
    console.log(req.body);

    await Day.update({"_id": req.body.data._id}, req.body.data, function(error, values) {
      //Do nothing
    });
  } catch (error) {
    console.log(error);
  }
})

module.exports = {
  model: Day,
  routes: router,
}
