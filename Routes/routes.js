import express from "express";
import {signup,login,getUsersProfile,logout} from "../controllers/userController.js";
const route=express.Router()
route.post('/signup',signup)
route.post('/login',login)
route.get('/logout',logout)
route.get('/getUserProfile',getUsersProfile)
export default route