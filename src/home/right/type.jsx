import React,{useState} from 'react'
import UseSendMessage from '../../context/useSendMessage.js'
import axios from 'axios'
import { IoSend } from "react-icons/io5";
export default function Type(){
    const {loading,sendMessage}=UseSendMessage()
    const [message,setMessage]=useState('')
    const HandleSubmit=async(e)=>{
        e.preventDefault()
        await sendMessage(message)
        setMessage('')
    }
    return(
        <>
        <form onSubmit={HandleSubmit}>
<div className='flex w-[70%] space-x-2 h-[10vh] fixed bottom-1 text-center bg-gray-800'>
        <div className='w-[70%] mx-4 my-1'>
        <input type="text" 
        value={message}
        onChange={(e)=>{
            setMessage(e.target.value)
        }}
        placeholder="Send a new message" className="text-white grow outline-none bg-slate-900 w-full py-4 px-3 items-center rounded-xl" />
        </div>
        <button className='text-3xl text-white'>
            <IoSend/>
        </button>
        </div>
        </form>
        </>
    )
}