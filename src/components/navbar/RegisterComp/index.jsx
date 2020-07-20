import React from 'react'
import  './Register.scss'
import Button from '../../atoms/button'

const RegisterComp = ()=>{
    return(
        <div className="auth-container">
        <div className="auth-card">
            <p className="auth-title">Register</p>
            <input className="input" placeholder="Email" type="text"  ></input>
            <input className="input"  placeholder="Password" type="password" ></input>
            <Button title="Register" ></Button>
        </div>
        {/* <button>Go to Dashboard</button> */}
    </div>
    )
}
export default RegisterComp