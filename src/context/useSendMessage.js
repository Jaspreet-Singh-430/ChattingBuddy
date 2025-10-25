import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UseConversation from '../stateManage/useConversation.js'
export default function UseSendMessage() {
    const [loading,setLoading]=useState(false)
    const {messages,setMessages,selectedConversation}=UseConversation()
    const sendMessage=async(message)=>{
        setLoading(true)
        if(selectedConversation) {
            try {
                console.log(selectedConversation)
                const res=await axios.post(`/api/message/send/${selectedConversation._id}`,{message})
                // const data=response.json()
                console.log(res.data.newmessage.message)
                console.log(messages)
                setMessages([...messages,...res.data.newmessage.message])
                setLoading(false)
            }
            catch(err) {
                console.log("error in sendMessage "+err)
            }
        }
    }
//    var sendMessage=new Function() 
    // useEffect(()=>{
         
    // },[])
    
    return {loading,sendMessage}
    
}