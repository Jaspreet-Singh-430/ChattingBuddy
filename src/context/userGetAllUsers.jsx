import React,{useState,useEffect} from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
export default function UserGetAllUsers() {
    const [allUsers,setAllUsers]=useState([])
    const [loading,setLoading]=useState([])
    useEffect(()=>{
        const getUsers=(async ()=>{
            setLoading(true)
            try {
                const token=Cookies.get('jwt')
                console.log(token)
                const response=await axios.get('/api/user/getUserProfile',{
                    credentials:'include',
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                console.log(response.data.filteredUsers)
                setAllUsers(response.data.filteredUsers)
                setLoading(false)
            }
            catch(err) {
                console.log("error in getAllUsers: "+err)
            }
        })
        getUsers()
    },[])
    return(
        [allUsers,loading]
    )
}