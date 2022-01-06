import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSucces = (isLoggin, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        isLogin: true,
        userId: userId
    }
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
         error: error
    }
};

export const logoutSucceed = () => {
    return  {
        type: actionTypes.AUTH_LOGOUT      
     }
}
export const logout = () => {
    return {
       type: actionTypes.AUTH_INITIATE_LOGOUT      
    }
}

export const logoutUser = () => {
   return {
      type: actionTypes.AUTH_LOGOUT_USER 
   }
};

export const auth = (email, password, isSignup) => {
     return {
         type: actionTypes.AUTH_USER,
         email: email,
         password: password, 
         isSignup: isSignup
     }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        axios.get('/users/islogin')
        .then(response => {
            dispatch(authSucces(true, response.data.user._id));
        }).catch(err=> {
            dispatch(logout());
            console.clear();
        })
    }
}