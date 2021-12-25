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
// getbyId
// Search adds




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
