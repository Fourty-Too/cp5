const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const foodSchema = new mongoose.Schema({
  foodTitle: String,
  dayID: String,
  calories: Number,
});

const Food = mongoose.model('Food', foodSchema);

// upload comment
router.post('/', async (req, res) => {
  if (!req.body.foodCalories ||  !req.body.foodTitle) {
  console.log("This is what tripped it up")
    return res.status(400).send({
      message: "Both fields required"
    });
  }

  try {

    const food = new Food({
      foodTitle: req.body.foodTitle,
      dayID: req.body.dayID,
      calories: req.body.foodCalories
    });
    await food.save();

    let everything = await Food.find({
      dayID: req.params.id
    }).sort({
      created: -1
    });

    return res.send(everything);
  } catch (error) {
    console.log("Here?");
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let food = await Food.find({
      dayID: req.params.id
    }).sort({
      created: -1
    });

    return res.send(food);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Food,
  routes: router,
}
