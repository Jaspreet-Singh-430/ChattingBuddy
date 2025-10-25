// import {useEffect,createContext,useState,useContext} from 'react'
// import {useAuth} from './authProvider.jsx'
// import io from 'socket.io-client'
// export const SocketContext=createContext()
// export const useSocketContext=()=>{
//     return useContext(SocketContext)
// }
// export const SocketProvider=({children})=>{
//     const [socket,setSocket]=useState(null)
//     const [onlineUsers,setOnlineUsers]=useState('')
//     const {authUser}=useAuth()
//     console.log(authUser)
//     useEffect(()=>{
//         const getSockets=()=>{
//         if(authUser) {
//             const socket=io("http://localhost:3000/",
//             {query:{
//                 userId:authUser.user.user_id
//             }
//         })
//             setSocket(socket)
//             socket.on('getOnline',(users)=>{
//                 console.log(users)
//                 setOnlineUsers(users)
//             })
//             // return ()=>socket.close()
//         }
//         else {
//             if(socket)
//             {
//                 socket.close()
//                 setSocket(null)
//             }
//         }
//     }
//     getSockets()
//     },[authUser])
//     return(
//         <SocketContext.Provider value={socket,onlineUsers}>
//             {children}
//         </SocketContext.Provider>
//     )
// }
