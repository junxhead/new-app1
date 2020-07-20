import React, { Component } from 'react'
import LoginComp from '../../../components/navbar/LoginComp'
import {Provider} from 'react-redux'
import store from '../../../config/redux/store/store'


class Login extends Component{
    state = {
        email:'',
        password:''
    }
    handleChangeText = (e)=>{
        this.state({
            [e.target.id]:e.target.value,
        })
    }
    render() {
        return (
            <Provider store={store}>
                <LoginComp/>
            </Provider>
        )
    }

}
export default Login