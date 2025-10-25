import React from 'react'
import {useContext} from 'react'
import Left from './home/left/left'
import Right from './home/right/right'
import SignUp from './components/signup'
import Login from './components/login'
import Loading from './components/Loading'
import Logout from './home/left1/logout'
import {AuthProvider,useAuth,AuthContext} from './context/authProvider.jsx'
import {Route,Routes,Navigate} from 'react-router-dom'
export default function App() {
  const {authUser,setAuthUser}=useAuth()
  return (
    <>
    {/* <Loading/> */}
  <Routes>
    <Route path="/" element={authUser ? 
    (<div className='flex h-screen'>
     <Logout/> 
    <Left/>
  <Right/>
  </div>) : (<Navigate to={"/login"}/>)}/>
    <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <Login/> }/>
    <Route path="/signup" element={authUser ? <Navigate to={"/login"}/> : <SignUp/>}/>   
  </Routes>  
    </>
  )
}

