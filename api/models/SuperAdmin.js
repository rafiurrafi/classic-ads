const {Schema, model}= require('mongoose')

const bcrypt = require('bcrypt')

const superAdminSchema = new Schema({

    firstName:String,
    firstName:String,
    userName:String,
    userType:{ type:String, default:"SuperAdmin"},
    isDeleted:{ type:Boolean, default:false},
    email:{ type:String, unique:true },
    password: { String , default :"" },
    profileImage: String,
    resetLink : { String , default :"" },
    address:{ division : String, destrict : String, upozila : String, 
             zipcode : String,  area : String },

        
})

adminSchema.pre('save', function(next){

    var admin = this;

    if(this.isModified('password') || this.isNew){

        bcrypt.genSalt(10,function(err, salt){

            if(err){

                return next(err)

            }

            bcrypt.hash(admin.password, salt , function(err,hash){

                if(err){

                    return next(err)

                }

                if(hash){

                    admin.password = hash

                }

                next()

            })

        })

    }else{

        next()

    }

}) 

module.exports = model('SuperAdmin',superAdminSchema)
