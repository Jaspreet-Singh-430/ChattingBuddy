import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthProvider,useAuth,AuthContext} from '../context/authProvider.jsx'
export default function SignUp() {
  const {authUser,setAuthUser}=useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const password=watch('password','')
      const confirmPwd=watch('confirmPwd','')
      const validatePasswordMatch=(value)=>{
        return value==password || "Password and Confirm Password don't match"
      }
      const onSubmit = async (data) => {
        const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
        confirmPwd:data.confirmPwd
      }
      await axios.post("/api/user/signup",userInfo)
      .then((response)=>{
        console.log(response)
        if(response.data) {
          alert("Signup successful! You can login now.")
          localStorage.setItem('messanger',JSON.stringify(response.data))
          setAuthUser(response.data)
        }
      })
      .catch((error)=>{
       if(error.response) {
        alert(error.response.data.error)
       }
      })
    }
    return(
        <>
        <div className="flex items-center w-screen h-screen justify-center">
            <form onSubmit={handleSubmit(onSubmit)} action='' className="border border-black px-6 py-3 rounded-md space-y-3 w-90">
                <h2 className="text-blue-700 text-2xl font-bold items-center">Messanger</h2>
                <h1 className="text-2xl items-center">Create a new <span className="text-blue-600 font-semibold">Account</span></h1>
                
                
                
                    <div>
                <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
     {...register("fullname", { required: true })} 
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
  />
</label>
  {errors.fullname && <span className='text-red-600 text-xs font-semibold'>This field is required**</span>}
<p className="validator-hint hidden font-semibold">
  Must be 3 to 30 characters
  <br />containing only letters, numbers or dash
</p>
</div>

<div>
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" {...register("email", { required: true })}  />
</label>
{errors.email && <span className='text-xs text-red-600 font-semibold'>This field is required**</span>}
<div className="validator-hint hidden font-semibold">Enter valid email address</div>
</div>

<div>
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    {...register("password", { required: true })} 
    placeholder="Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
{errors.password && <span className='text-red-600 text-xs font-semibold'>This field is required**</span>}
<p className="validator-hint hidden font-semibold">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>
</div>

<div>
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    {...register("confirmPwd", { required: true, validate:validatePasswordMatch })} 
    placeholder="Confirm Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
{errors.confirmPwd && <span className='text-red-600 text-xs font-semibold'>{errors.confirmPwd.message}</span>}
<p className="validator-hint hidden font-semibold">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>
</div>
                
<div className=''>
<input className='text-white bg-blue-700 w-full rounded-lg py-2 cursor-pointer' type='submit' value="Signup"/>
<p className='mt-2'>Have any account? <Link to={'/login'} className='text-blue-700 underline cursor-pointer ml-1'>Login</Link></p>
</div>
            </form> 
        </div>
        </>
    )
}