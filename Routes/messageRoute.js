import express from 'express'
import {sendMessage,getMessage} from '../controllers/messageController.js'
// const app=express()
const messageRoutes=express.Router()
messageRoutes.post('/send/:id',sendMessage)
messageRoutes.get('/get/:id',getMessage)
export default messageRoutes