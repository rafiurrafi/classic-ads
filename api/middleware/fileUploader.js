const multer = require('multer')
const fs = require ('fs')

// Set storage engine
const fileStorage = multer.diskStorage({

    destination : function(req,file, cb){
        var dir = "./uploads/images"
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        cb(null, dir)
    },

    filename : (req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})


// Init upload
const fileUploader = multer({
    storage:fileStorage,
    limits : { fileSize : 1024*1024*5 },

    fileFilter:(req, file, cb) => {
    let exAsArray = file.mimetype.split("/") ;
    let extention = exAsArray[exAsArray.length - 1]
    if(extention == "jpg" || extention == "jpeg"){
        cb(null, true)
    }else{
        cb(new Error("only jpg and jpeg files are allowed"))
    }
}

})
 
module.exports = fileUploader
