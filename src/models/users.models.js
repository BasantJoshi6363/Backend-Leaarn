import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcraypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        lowercase : true,
        trim : true,
        unique : true,
        required : true

    },
    email :{
        type : String,
        unique : true,
        lowercase : true,
        trim : true,
        unique : true,
        required : true
    },
    fullName:{
        type : String,
        trim : true,
        unique : true,
        required : true
    },
    avatar:{
        type : String,
        required : false,
    },
    coverImage:{
        type : String,
        required : true
    },
    password:{
        type : String,
        min : [6,"password at least 6"],
        max : [20, "maximum 20 characters allowed"],
        required: true
    },
    refreshToken : {
        type : String,
        required : true
    }
},{timestamps : true})
videoSchema.plugin(mongooseAggregatePaginate)

export let User = mongoose.model("User",userSchema)