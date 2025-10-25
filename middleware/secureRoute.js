import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import dotenv from 'dotenv'
dotenv.config()
const secureRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        console.log(process.env.JWT_SECRET_KEY)
        if(!token)
            return res.status(401).json({message:"user not authorized"})
        const verified=await jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log("user is "+verified.userId)
        if(!verified)
            return res.status(403).json({message:"invalid token"})
        const user=await User.findById(verified.userId).select("-password")
        if(!user)
            return res.status(404).json({message:"user not found"})
        // console.log(JSON.parse(verified))
        // req.user=verified
        req.user=verified.userId
        next();
    }
    catch(err) {
        res.status(500).send("Internal server error "+err)
    }
}
export default secureRoute