import Conversations from '../models/conversation.js'
import Message from '../models/messages.js'
export const sendMessage=async (req,res)=>{
    try {
    const {message}=req.body
    const {id:receiverId}=req.params
    const senderId=req.user._id
    let conversation=await Conversations.findOne({participants:{$all:[senderId,receiverId]}})
    if(!conversation)
    {
        let conversation=await Conversation.create({
            participants:[senderId,receiverId],
            
        })
        const newmessage=new Message({
            senderId,
            receiverId,
            message
        })
        if(newmessage) {
            conversation.messages.push(newmessage._id)
        }
        await Promise.all([newmessage.save(),conversation.save()])
        res.status(201).json({message:"message sent successfully",newmessage})
    }
}
catch(error) {
    console.log("error in sending message",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export const getMessage=async(req,res)=> {
    try {
        const {id:chatuser}=req.params
        const {senderId}=req.user._id
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,chatuser]}
        }).populate("messages")
        if(!conversation)
        return res.status(201).send("No conversation found")
       messages=conversation.messages
       res.status(201).json({messages})

    }
    catch(error) {
        res.status(500).json({message:"internal server error"})
    }
}