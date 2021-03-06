
import axios from "../helpers/axios";
import { authConstant,cartConstants } from "./constants"

export const signup = (user) => {
    return async (dispatch) => {
      let res;
      try {
        dispatch({ type: authConstant.SIGNUP_REQUEST });
        res = await axios.post(`/signup`, user);
        if (res.status === 201) {
          dispatch({ type: authConstant.SIGNUP_SUCCESS });
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstant.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        } else {
          const { error } = res.data;
          dispatch({ type: authConstant.SIGNUP_FAILURE, payload: { error } });
        }
      } catch (error) {
        const { data } = error.response;
        dispatch({
          type: authConstant.SIGNUP_FAILURE,
          payload: { error: data.error },
        });
      }
    };
  };

export const login = (user) => {
    console.log(user)
    return async (dispatch) => {

        dispatch({ type: authConstant.LOGIN_REQUEST });
        const res = await axios.post('/signin', {
            ...user
        });
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user',JSON.stringify(user));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstant.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                });
            }
        }
    }
}



export const isUserLogedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem('token');
        if(token){
            const user=JSON.parse(localStorage.getItem('user')); 
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: {
                    error: "failed to log in"
                }
            });
        }
    }
}


export const signout=()=>{
    return async (dispatch)=>{

        dispatch({type: authConstant.LOGOUT_REQUEST });
        
        localStorage.clear();
        dispatch({ type: authConstant.LOGOUT_SUCCESS });
        dispatch({ type: cartConstants.RESET_CART });
        
    }
}