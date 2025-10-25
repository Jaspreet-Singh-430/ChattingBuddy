import {Server} from 'socket.io'
import http from 'http'
import express from 'express'
const app=express()
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"http://localhost:4001",
        methods:["GET","POST"]
    }
})
const users={}
io.on('connection',(socket)=>{
    console.log("New client connected",socket.id)
    const userId=socket.handshake.query.userId
    users[userId]=socket.id
    console.log("Backend users are: "+users)
    // socket.on("joinroom",(room)=>{
    //     socket.join(room)
    //     console.log(`User joined the room ${room}`)
    // })
    io.emit('getOnline',JSON.stringify(users))
    socket.on('disconnect',()=>{
        console.log(`User disconnected ${socket.id}`)
        delete users[userId]
        io.emit('getOnline',JSON.stringify(users))
    })
})
export {app,io,server}