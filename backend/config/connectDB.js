import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


if(!process.env.MONGO_URI){
    throw new Error("Please Provide MongoDB URI in .env file")
}

async function connectDB(){

    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log("MongoDB connection error : ", err.message)
        process.exit(1)
    }
}

export default connectDB