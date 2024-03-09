import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
// password for mongo db cluster - GqxVjc8UfPMZzTl3   and username is - guruprasanthp2020csea
const app = express()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("sucessfull")
})
app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
})