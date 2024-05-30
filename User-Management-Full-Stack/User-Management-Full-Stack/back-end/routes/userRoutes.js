const express = require("express");
const User = require("../models/User");

const router = express.Router();

//Crear a new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Crear a new user
router.get("/users", async (req, res) => {
  try {
    const user = await User.find({});
    // await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});


//Update user
router.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if(!user){
      res.status(404).send();
    }
    // await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Update user
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if(!user){
      res.status(404).send();
    }
    // await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
