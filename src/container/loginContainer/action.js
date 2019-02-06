import {
    LOGIN_SUCCESS
} from './constants'
import {
    googleLogin as googleLoginService
} from '../../services/loginService'

export const googleLogin = () => {
    return (dispatch, getState) => {
        googleLoginService().then(user => {
            dispatch(loginSuccess(user))
        })
    }
}

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const loadCategories = () => {
    return {
      types: ['LOAD','AWESOME','OH_NO'],
      payload: {
        request:{
          url:'/todos/1'
        }
      }
    }
  }