const {Schema, model}= require('mongoose')

const categorySchema = new Schema({  // this is for product

    categoryName:String,
    freeAdsLimit:{
       type: Number,
       default:5
    }

    product:[{ 
        type:Schema.Types.ObjectId,
        ref: 'Product',
    }],
  },{
    timestamps:true
})

module.exports = model('Category', categorySchema)
