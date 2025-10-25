import React from 'react'
import UseConversation from '../../stateManage/useConversation.js'
// import {useSocketContext} from '../../context/socketContext.jsx'
export default function ChatUser() {
  const {selectedConversation}=UseConversation()
  console.log(selectedConversation)
  const receiver=selectedConversation ? selectedConversation.fullname : ' '
  // const isSelected=selectedConversation?._id===user._id
//   const {onlineUsers}=useSocketContext()
// const getOnlineUsersStatus=(userId)=>{
//   return onlineUsers.include(userId)?'online':'offline'
// }
  // const isOnline=onlineUsers.includes(user._id)
    return(
        <>
            <div className='flex space-x-4 pt-5 pl-5 pb-3 bg-gray-900 hover:bg-gray-600 duration-300 text-white h-[14vh]'>
<div>
<div className={`avatar avatar-online`}>
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
  </div>
</div>
            </div>
            <div>
                <h1 className='text-xl'>{receiver}</h1>
                {/* <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span> */}
                <span className='text-sm'>online</span>
            </div>
            </div>
        </>
    )
}