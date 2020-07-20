import React from 'react'
import  './Login.scss'
import Button from '../../atoms/button'
import {connect} from 'react-redux'
import {login} from '../../../config/redux/reducer/reducer'
import { Component } from 'react'

class LoginComp extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
  
    render(){
        let{email,password} = this.state
        let{isLoginPending,isLoginSuccess,isLoginError} = this.props
        return(
            <div className="auth-container" onSubmit={this.onSubmit}>
            <div className="auth-card">
                <p className="auth-title">Login</p>
                <input className="input" placeholder="Email" type="email" name="email"  onChange={e=>this.setState({email:e.target.value})}></input>
                <input className="input"  placeholder="Password" type="password" name="password" onChange={e=>this.setState({password:e.target.value})}></input>
                {/* <Button title="Login" ></Button> */}
                <input type="submit" value="login" className="btn" />
                {isLoginPending && <div>Please Wait</div>}
                {isLoginSuccess && <div>Welcome Back</div>}
                {isLoginError && <div>{isLoginError.message}</div>}
            </div>
            {/* <button>Go to Dashboard</button> */}
        </div>
        )
    }
    onSubmit = (e) => {
        e.preventDefault()
        let {email,password} = this.state
        this.props.login(email,password)
    }
}

const mapStateToProps = (state)=>{
    return{
        isLoginPending:state.isLoginPending,
        isLoginSuccess:state.isLoginSuccess,
        isLoginError:state.isLoginError,

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        login:(email,password)=>dispatch(login(email,password))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginComp) 