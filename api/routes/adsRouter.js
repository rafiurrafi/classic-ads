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

      const newAds = new Ads({
        ...req.body,
        user:req.userId
      });


if(userType === "user"){    //
    let isValidUser = await Admin.findOne(
       {
        $and: [ { userId }, { "isDeleted": false }] // mixemum free ads 5
            }
       ) //find the user

       if(isValidUser && user.ads.length<=5){
       const savedAds = await newAds.save(); // save Ads
       await User.updateOne({
         _id:req.userid
       }, {
         $push:{  // push ads id to the user 
           ads:savedAds._id
           }
       })
       res.status(200).json("Ads was added successfully");
    }
  }else if(userType === "admin"){ // this is for admin
    const savedAds = await newAds.save();
    res.status(200).json(savedAds);
    res.status(200).json("Ads was added successfully");

    }else{
        res.status(200).json("you reached maximum limit of free ads");
    }
}catch (err) {
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


// multiple search
//get all blog by filter 
const getALlAdsController = async ({input}, req) => {
  const {query, page, sortBy, search} = input //get the query input from body 
  // const {isAuth} = req 
  if (true) { //check the authentication of user
      const {category, duration} = query
      const queryStruct = {
          $and: [
              {
                  "isDelete": false
              }
          ]
      } //create main structure for database query in dynamic way
      const sortStruct = {}
      //category will be and array of string
      if (category != undefined && category.length != 0) categoryFilter(category, queryStruct) //if it is filtered by category then it will execute
      const findAllData = await Blog.find (queryStruct).populate({ 
        path: "user",
        select: `personalInfo.firstName personalInfo.lastName personalInfo.profileImage`
    }).sort (sortBy)


    
