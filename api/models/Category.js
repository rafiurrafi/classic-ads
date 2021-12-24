const {Schema, model}= require('mongoose')

const categorySchema = new Schema({  // this is for product

    categoryName:String,

    

    product:[{ 

        type:Schema.Types.ObjectId,

        ref: 'Product',

    }],

  },{

    timestamps:true

})

module.exports = model('Category', categorySchema)
