import React from 'react'
import TextField from '@mui/material/TextField';
import './/CSS/login.css'
function Login() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
        <TextField type='text' id="outlined-basic" label="Name" variant="outlined" />
        <TextField type='email' id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField type='password' id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <button type="button">Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
