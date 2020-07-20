import React, { Component } from 'react'
import RegisterComp from '../../../components/navbar/RegisterComp'


class Register extends Component{
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
           <RegisterComp />
        )
    }

}
export default Register