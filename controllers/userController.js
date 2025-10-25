import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import generateToken from '../JWT/generateToken.js'
export const signup=async (req,res)=> {
const {fullname,email,password,confirmPwd}=req.body
const hashedPwd=await bcrypt.hash(password,10)
if(password!=confirmPwd)
{
    return res.status(400).json({message:"Passwords do not match"})
}
const user=await User.findOne({email})
if(user) {
    return res.status(400).json({message:"email already exists"})
}
const newUser=new User({fullname,email,password:hashedPwd})
await newUser.save().then(()=> {
    generateToken(newUser._id,res)
    res.status(201).json({message:"User registered successfully",user:{fullname:newUser.fullname
        ,email:newUser.email,
        userId:newUser._id
    }})
})
.catch((err)=>{
    console.log(err)
res.status(500).json({message:"Server error"})
})
}


export const login=async(req,res)=> {
    try {
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(user) 
    var isMatch=await bcrypt.compare(password,user.password)
    if(!user || !isMatch)
        return res.status(404).json({message:"invalid user or password"})
    generateToken(user._id,res)
    res.status(201).json({mess:"user logged in successfully",user:{
        user_id:user._id,
        fullname:user.fullname,
        email:user.email,
    }})

    }
    catch(err) {
    console.log(err)
    res.status(500).json({message:"Server error"})
    }
}

export const getUsersProfile=async (req,res)=>{
    try{
        const loggedInUser=req.user
        console.log(loggedInUser)
        const filteredUsers=await User.find({_id:{$ne:loggedInUser}}).select('-password')
        res.status(200).json({filteredUsers})
    }     
    catch(err) {
        res.status(500).send("Internal server error "+err)
    }
}
export const logout=(req,res)=> {
    try {
        res.clearCookie('jwt')
        res.status(200).json({msg:"User logout successfully"})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({msg:"server error"})
    }
}