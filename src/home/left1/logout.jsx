import React,{useState} from 'react'
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie"
import axios from 'axios'
export default function Logout() {
    const [loading,setLoading]=useState(false)
    const HandleLogout=async()=>{ 
        setLoading(true)
        try {
            const response=await axios.get('/api/user/logout')
            localStorage.removeItem("messanger")
            Cookies.remove('jwt')
            setLoading(false)
            alert("Logout successfully")
        } catch(error) {
            console.log(error.message)
        }
    }
    return(
        <div className='w-[5%] bg-slate-950 text-white flex flex-col justify-end'>
            <div className="p-2 align-bottom">
                
       
<button>
<CiLogout className='p-2 text-5xl text-white hover:bg-gray-600 rounded-md cursor-pointer duration-300' onClick={HandleLogout}/>
</button>
   </div>     
</div>
    )
}