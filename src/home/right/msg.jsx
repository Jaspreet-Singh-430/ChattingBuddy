import React from 'react'
import UseGetMessage from '../../context/useGetMessage.js'
export default function Msg({message}) {
  const {messages,loading}=UseGetMessage()
  const authUser=JSON.parse(localStorage.getItem("messanger"))
  const itsme=message.senderId===authUser.user.user_id
  // console.log(message.senderId)
  // console.log(authUser.user.user_id)
  const chatme=itsme?"chat-end":"chat-start"
  const chatColor=itsme?"chat-bubble-accent":"chat-bubble-info"
    return (
        <>
        <div className='p-4'>
        <div className={`chat ${chatme}`}>
  <div className={`chat-bubble ${chatColor}`}>{message.message}</div>
</div>
{/* <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
</div> */}
        </div>
        
        </>
    )
}