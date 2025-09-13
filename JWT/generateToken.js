import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const generateToken=(userId,res)=>{
const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:"5d"})
res.cookie('jwt',token,{
    httpOnly:true,
    sameSite:'strict',
    secure:true
})
}
export default generateToken