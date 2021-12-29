
const {Schema, model}= require('mongoose')

const addsSchema = new Schema(

  {

    status: { type: String, required: true },

    title: { type: String, required: true },

    price:{ type: String, required: true},

    location: { type: String, required: true },

    desc: { type: String, required: true },

    priceType: {

      type: String, 

      enum: ["free","spotlight","ggggg"] },

    productSize:[{ type:String, required:true }],

    productImg: [{ img:String }],

    locationArea: { 

          location:String, 

          city:String 

        },

    isDeleted:{ type: Boolean, default:false },

    isPanding:{ type: Boolean, default: true },

    isDeclined:{ type: Boolean, default:false },

    isWishList:{ type: Boolean, default:false },

    category:String,

    subCategory: String,

    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    updatedAt: Date,

  },

  { timestamps: true }

);

module.exports = model("Adds", addsSchema);
