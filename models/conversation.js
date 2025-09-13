import mongoose from 'mongoose'
import User from '../models/userModel.js'
import Message from '../models/messages.js'
const conversationSchema=new mongoose.Schema(
    {
        participants:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }],
        messages:[{
        type:mongoose.Schema.Types.ObjectId,    
        ref:'Messages',
        default:[]
        }]
    },
    {timestamps:true}
)
const Conversations=mongoose.model("Conversations",conversationSchema)
export default Conversations