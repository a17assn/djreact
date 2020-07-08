import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart =() => {
  return {
    type: actionTypes.AUTH_START
  }
}


export const authSuccess =(token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}


export const authFail =(error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () =>{
  localStorage.removeItem('user');
  localStorage.removeItem('exprationDate');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}

export const checkAuthTimeout= exprationTime => {
  return dispatch => {
    setTimeout(() =>{
      dispatch(logout());
    }, exprationTime * 1000)
  }
}

export const authLogin =(username , password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://127.0.0.1:8001/rest-auth/login/',{
      username: username,
      password: password
    })
    .then(res =>{
      const token = res.data.key;
      const exprationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem('token' , token)
      localStorage.setItem('exprationDate' , exprationDate)
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(err=>{
      dispatch(authFail(err))
    })
  }
}


export const authSignup =(username, email , password1 , password2) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://127.0.0.1:8001/rest-auth/registration/',{
      username: username,
      email: email,
      password1: password1,
      password2: password2
    })
    .then(res =>{
      const token = res.data.key;
      const exprationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem('token' , token)
      localStorage.setItem('exprationDate' , exprationDate)
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(err=>{
      dispatch(authFail(err))
    })
  }
}


export const authCheckState =() =>{
  return dispatch =>{
    const token  = localStorage.getItem('token');
    if (token === undefined) {
      dispatch(logout());
    }else{
      const exprationDate = new Date(localStorage.getItem('exprationDate'));
      if (exprationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout((exprationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}