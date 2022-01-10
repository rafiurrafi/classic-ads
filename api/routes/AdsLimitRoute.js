
const express = require('express');
const router = express.Router();
const Ads = require('../models/Ads');
const User = require('../models/User');

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const ads = await Ads.find({ userId: user._id });
    res.status(200).json(ads);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a post
router.put("/:id", async (req, res) => {
  try {
    const ads = await Ads.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await ads.updateOne({ $set: req.body });
      res.status(200).json("the ads has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

