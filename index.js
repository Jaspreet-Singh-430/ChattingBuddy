import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import route from './Routes/routes.js'
import messageRoutes from './Routes/messageRoute.js'
dotenv.config()
const app=express();
const port=process.env.PORT
const MONGODB_URI=process.env.MONGODB_URI
try {
    mongoose.connect(MONGODB_URI)
    console.log("mongodb connected to backend")
}
catch(err) {
    console.log("mongodb Connection Error",err)
}
app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
app.use('/user',route);
app.use('/message',messageRoutes)
app.listen(port,(err)=>{ 
if(err)
    throw err;
console.log("Server is listening at "+port)
})