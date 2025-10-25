import React from 'react'
import UseConversation from '../../stateManage/useConversation.js'
// import {SocketContext} from '../../context/socketContext.jsx'
// import {useSocketContext} from '../../context/socketContext.jsx'
export default function User({user}) {
    const {selectedConversation,setSelectedConversation}=UseConversation()
    const isSelected=selectedConversation?._id===user._id
    // const {socket,onlineUsers}=useSocketContext()
    // console.log(onlineUsers)
    // const isOnline=user._id in JSON.parse(onlineUsers)
    return(
        <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
        onClick={()=>setSelectedConversation(user)}>
        <div className='flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer'>
            {/* <div className={`avatar ${isOnline ? avatar-online :''}`}> */}
            <div className="avatar avatar-online">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
  </div>
</div>
<div>
    <h1 className='font-bold'>{user.fullname}</h1>
    <span>{user.email}</span>
</div>
</div>
        </div>

    )
}