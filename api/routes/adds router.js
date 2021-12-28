const express = require('express');

const router = express.Router();
const Ads = require('../models/Ads');

const Sequelize = require ('sequelize')

const Op = Sequelize.Op

//create a post

router.post("/", async (req, res) => {

  const newAds = new Ads(req.body);

  try {

    const savedAds = await newAds.save();

    res.status(200).json(savedAds);

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
// getbyId
// Search adds
router.get('/search/:name',(req,res) =>{
let regex = new RegExp(req.params.name, 'i');
Ads.find({name:regex}).then((result) => {
Res.status(200).json(result) }) 
})

router.get('/search',(req,res) =>{

let {term }=req.query

term = term.toLowerCase();

Ads.findAll({where : {

city: {[Op.likes]: '%'+ term +'%' }} 

})

.then( ads => res.render ('ads',{ads})

.catch (err => console.log(err))

});




//get all adds
