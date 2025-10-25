import React,{useEffect} from 'react'
import ChatUser from './chatuser.jsx'
import Message from './message.jsx'
import Type from './type.jsx'
// import Loading from '../../components/Loading.jsx'
import UseConversation from '../../stateManage/useConversation.js'
import {useAuth} from '../../context/authProvider.jsx'
const NoChat=()=>{
    const {authUser}=useAuth()
    console.log(authUser.user.fullname)
    return (<>
    <div className='flex h-screen items-center justify-center'>
        <h1 className='text-center font-semibold text-xl'>
        Welcome <span>{authUser.user.fullname}</span>
        <br></br>Select a conversation to start a chat
        
        </h1>
        {/* {authUser && <NoChat/>} */}
    </div>
    </>)
}
export default function Right() {
    const {messages,selectedConversation,setSelectedConversation}=UseConversation()
    useEffect(()=>{
        return setSelectedConversation(null)
    },[])
    return(    
        <div className="w-[70%] bg-slate-950 text-white">
            <div>
            {(selectedConversation) ? (<>
                <ChatUser/>
        <div className='py-2 overflow-y-auto' style={{maxHeight:'calc(100vh-14vh)'}}>
        <Message/>
        </div>
        <Type/></>
        
    ):(<NoChat></NoChat>) } 
    </div>
        </div>    
        
        
    )
}
