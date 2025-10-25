import express from "express";
import secureRoute from '../middleware/secureRoute.js'
import {signup,login,getUsersProfile,logout} from "../controllers/userController.js";
const route=express.Router()
route.post('/signup',signup)
route.post('/login',login)
route.get('/logout',logout)
route.get('/getUserProfile',secureRoute,getUsersProfile)
export default route