const express = require('express');
const router = express.Router();
const Ads = require('../models/Ads');
const User = require('../models/User');

// get users own ads
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const ads = await Ads.find({ userId: user._id });
    res.status(200).json(ads);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a ads //maximum 5 ads for free
router.post("/", async (req, res) => {
try {
const { userType} = req.body
const user = await User.findOne({ username: req.params.username });
    const ads = await Ads.find({ userId: user._id });
    

  const newAds = new Ads(req.body);
if(userType === "admin"){    //admin login controller
 let isValidUser = await Admin.findOne(
       {
        $and: [ { userId }, { "isDeleted": false }]
            }
       ) //find the admin
}else{
    if(isValidUser){
if(User.usertype === null && Ads.length <= 5){
    const savedAds = await newAds.save();
    res.status(200).json(savedAds);
}else if(Ads.length <= 5){
    const savedAds = await newAds.save();
    res.status(200).json(savedAds);
}else{
res.status(200).json("you reached maximum limit of free ads");
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
// Search ads1
router.get('/search/:name',(req,res) =>{
let regex = new RegExp(req.params.name, 'i');
Ads.find({name:regex})
.then((result) => {
res.status(200).json(result) }) 

})

// Search ads2
//router.get('/search',(req,res) =>{
//let {term }=req.query
//term = term.toLowerCase();
//Ads.findAll({where : {
//city: {[Op.likes]: '%'+ term +'%' }} 
//})
//.then( ads => res.render ('ads',{ads}))
//.catch (err => console.log(err))
//});

//get user own all ads 

// delete temporary by user
const postActiveController = async (req ,res)=>{  //delete temporary
  try{
      const data = await Ads.findByIdAndUpdate(
          {_id:req.params.id},
          { $set:{
              isDeleted : true
              }
          }
          )
          res.status(200).json({
              result : data
          })

  }catch(err){
      res.status(500).json({
          message : "server error ads",
          err
      })
  }
}
// delete permanent by admin
//delete user permanent
router.delete("/:id", async (req, res) => {
  // if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await Ads.findByIdAndDelete(req.params.id);
      res.status(200).json("Ads has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  // } else {
  //   return res.status(403).json("You can delete only your ads!");
  // }
});
