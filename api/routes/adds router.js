const express = require('express');

const router = express.Router();
const Ads = require('../models/Ads');

const Sequelize = require ('sequelize')

const Op = Sequelize.Op

// create
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
