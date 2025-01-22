import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const Navigate=useNavigate()
    const HandleSubmit=()=>{
       Navigate("/Main")
    }
  return (
    <>
    <div className='Main_div'>
        <div className='box'>
            <h1>Login Form</h1>
            <form onSubmit={HandleSubmit}>
                <div className='InputBox'>
                
                <input type='text' placeholder='' autoComplete='off'/>
                <label>Username</label>
                </div>
                <div className='password'>
            
                    <input type='password' name='password' placeholder=''/>
                    <label>password</label>
                </div>
                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
    </>
  )
}

export default Login
