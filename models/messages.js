import mongoose from 'mongoose'
const messageSchema=new mongoose.Schema(
    {
        senderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        receiverId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        message:{
            type:String,
            maxlength:1000,
            trim:true,
            validate:[
                {
                    validator:(value) => value.length>0,
                    message:'Message can not be empty'
                },
                    {
                        validator:(value) => /^[A-Za-z0-9\s]*$/.test(value),
                        message:'Message can only contain alphanumeric characters and spaces'
                    }
            ]
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
    },
    {
    timestamps:true
    }
)
const Message=mongoose.model('Messages',messageSchema)
export default Message
