import React,{useState,useEffect} from 'react'
import UseConversation from "../stateManage/useConversation.js"
import axios from 'axios'
export default function UseGetMessage() {
    const [loading,setLoading]=useState(false)
    const {messages,setMessages,selectedConversation}=UseConversation()
    useEffect(()=>{
        const getMessages=async ()=>{
            setLoading(true)
            if(selectedConversation && selectedConversation._id) {
                try {
                    console.log(selectedConversation)
                    const res=await axios.get(`/api/message/get/${selectedConversation._id}`)
                    // const data=response.json()
                    setMessages(res.data.messages)
                    setLoading(false)
                }
                catch(err) {
                    console.log("error in useGetMessage "+err)
                }
            }
        }
        getMessages();
    },[selectedConversation,setMessages])
    return {messages,loading}
}