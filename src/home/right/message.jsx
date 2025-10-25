import React,{useRef,useEffect} from 'react'
import Msg from './msg.jsx'
import UseGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'
export default function Message() {
  const {messages,loading}=UseGetMessage()
  const lastMessageRef=useRef()
  useEffect(()=>{
    setTimeout(() => {
      if(lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({behavior:'smooth'})
      }
    }, 100);
  },[messages])
  // console.log(messages)
  // // console.log(messages.length)
  // console.log(authUser.user._id)
  // console.log(message.senderId)
    return (
      <>
        <div style={{maxHeight:"calc(80vh)"}}> 
          {loading ? (<Loading/>):(messages ? messages.map((message)=>{
            return <Msg key={message._id} message={message} />
          }):'')}
        {(!loading && !messages) ? (
          <div>
            <p className="text-center mt-[20%] font-bold text-white">No conversation made yet </p>
          </div>
        ):''}
        </div>
        </>
    )
}