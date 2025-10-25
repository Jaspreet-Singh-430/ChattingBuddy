import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import route from './Routes/routes.js'
import messageRoutes from './Routes/messageRoute.js'
import cookieParser from 'cookie-parser'
import {app,server} from './socketIo/server.js'
// import {Server} from 'socket.io'
dotenv.config()
// const app=express();
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
        origin:["http://localhost:5173","http://localhost:4001"],
        credentials:true
    }
))
app.use(cookieParser())
app.use('/api/user',route);
app.use('/api/message',messageRoutes)
server.listen(port,(err)=>{ 
if(err)
    throw err;
console.log("Server is listening at "+port)
})