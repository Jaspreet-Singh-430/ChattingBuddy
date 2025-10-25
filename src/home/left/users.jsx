import React from 'react'
import User from './user.jsx'
import UserGetAllUsers from '../../context/userGetAllUsers.jsx'
export default function Users() {
    const [allUsers,loading]=UserGetAllUsers()
    console.log(allUsers)
    return(
        <div style={{maxHeight:"calc(80vh)"}} className="py-1 overflow-y-auto">
            {allUsers.map((user,index)=>{
                return <User key={index} user={user} ></User>
            })}
            
            
        </div>
    )
}