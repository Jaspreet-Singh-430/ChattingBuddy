import React from 'react'
import Search from './search'
import Users from './users'
export default function Left() {
    return(
        <>
        <div className="w-[30%] bg-black text-white">
            <h1 className='text-3xl font-bold p-2 px-11'>Chats</h1>
        <Search/>
        <hr/>
        <Users/>
        </div>
        </>
    )
}