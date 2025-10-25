import express from 'express'
import {sendMessage,getMessage} from '../controllers/messageController.js'
import secureRoute from '../middleware/secureRoute.js'
// const app=express()
const messageRoutes=express.Router()
messageRoutes.post('/send/:id',secureRoute,sendMessage)
messageRoutes.get('/get/:id',secureRoute,getMessage)
export default messageRoutes