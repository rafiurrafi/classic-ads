
const express = require('express');
const router = express.Router();
const Ads = require('../models/Ads');
const User = require('../models/User');

// get users free Ads
router.get("/freeAds", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const category = await Category.find();
    let userAdsNumber = user.ads.length
    let freeAdsNumber = category.freeAdsLimit - userAdsNumber

    res.status(200).json(freeAdsNumber);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update free ads Number   // this is for only admin
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
      await category.updateOne({ $set: req.body });
      res.status(200).json("the freeads Item has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

