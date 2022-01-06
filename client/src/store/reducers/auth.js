import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const initialState = {
    isLogin: false,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = (state, action) => {
    return updateObject(state, {error: null, loading: true} )
}

const authLogout = (state, action) => {
    return updateObject(state, {isLogin: false, userId: null });
}

const authSucces = (state, action) => {
        return updateObject(state, {
           isLogin: true,
           userId: action.userId,
           error: null,
           loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
      error: action.error, 
      loading: false
    });
}
const setAuthRedirectPath = (state, action) => {
     return updateObject (state, {authRedirectPath: action.path});
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case actionTypes.AUTH_START: return authStart(state,action)
      case actionTypes.AUTH_SUCCESS: return authSucces(state, action)
      case actionTypes.AUTH_FAIL: return authFail(state, action)           
      case actionTypes.AUTH_LOGOUT: return authLogout(state, action)           
       case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
      default: 
        return state;    
    }
}


export default reducer;