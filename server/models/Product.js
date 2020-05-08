const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const productSchema = mongoose.Schema({
    author: {
        type:Shema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type:String,
        maxglength: 5
    },
    description: {
        type: String,
    },
    price: {
        type:Number,
        default: 0 
    },
    images: {
        type: Array,
        default: []
    },   
    category : {
        type:Number,
        default: 1
    },
    sold :{
        type: Number,
        maxglength: 100,
        default: 0
    },
    views :{
        type: Number,
        default: 0
    }
}, {timestamps:true})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }