import { Schema } from "mongoose"
import mongoose from 'mongoose'

const CategorySchema = new Schema({

    category_id:{
        type:String
    },
    categoryName:{
        type:String,
        lowercase:true,
        trim:true
    },
    categoryDescription:{
        type:String,
        lowercase:true,
        trim:true
    },
    sub_category: [
        {
           type: Schema.Types.ObjectId,
           ref: "Category"
        }
    ]
},{timestamps:true})


const ProductSchema = new Schema({
    productName:{
        type:String,
        lowercase:true,
        trim:true

    },
    productShortDescription:{
        type:String,
        lowercase:true,
        trim:true
    },
    productDescription:{
        type:String,
        lowercase:true,
        trim:true
    },
    category_id:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    price:{
        type:Number,
        requird:true
    }
},{timestamps:true})

export const Product = mongoose.model('Product',ProductSchema)
export const Category = mongoose.model('Category',CategorySchema)

