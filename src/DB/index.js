import mongoose from "mongoose";
import {  DB_NAME } from "../constants.js";

export let connectDb= async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log("Connected database successfully.");
    } catch (error) {
        console.log(error)
        throw error
    }
}