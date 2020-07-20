import Promise from 'es6-promise'
const LOGIN_PENDING =  'LOGIN_PENDING'
const LOGIN_SUCCES = 'LOGIN_SUCCES'
const LOGIN_ERROR = 'LOGIN_ERROR'

function setLoginPending(isLoginPending) {
    return{
        type:LOGIN_PENDING,
        isLoginPending
        
    }
}

function setLoginSuccess(isLoginSucces) {
    return{
        type:LOGIN_SUCCES,
        isLoginSucces
    }
}

function setLoginError(isLoginError) {
    return{
        type:LOGIN_ERROR,
        isLoginError
    }
}

export function login(email,password) {
    return dispatch=>{
        dispatch(setLoginPending(true))
        dispatch(setLoginSuccess(false))
        dispatch(setLoginError(null))

        sendLoginRequest(email,password)
        .then(success=>{
            dispatch(setLoginPending(false))
            dispatch(setLoginSuccess(true))

        })
        .catch(err=>{
            dispatch(setLoginPending(false))
            dispatch(setLoginError(err))
        })
    }
}

export default function reducer(state = {
    isLoginPending : false,
    isLoginSucces : false,
    isLoginError : null
} ,action){

    switch(action.type){
        case LOGIN_SUCCES:
        return{
            ...state,
            isLoginSucces:action.isLoginSucces
        }
        
        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending:action.isLoginPending
            }
        case LOGIN_ERROR:
            return{
                ...state,
                isLoginError:action.isLoginError
            }
            default:
                return state
    }

}


function sendLoginRequest(email,password){
    return new Promise((resolve, reject)=>{
        if (email === 'admin@example.com' &&  password  === 'admin') {
            return resolve(true)
        }else{
            return reject(new Error('invalid email or password'))
        }
    })
}