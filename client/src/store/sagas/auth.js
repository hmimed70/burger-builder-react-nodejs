import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* authUserSaga(action) {

        yield put(actions.authStart());
        const authData = {
             email: action.email,
             password : action.password
        };
         let url = '/users/signup';
         if (!action.isSignup){
             url = '/users/login';
         }
        try {
            const response = yield axios.post(url,authData)
            if(response.status === 200 || response.status === 201){
                yield localStorage.setItem('isAuthenticate', 'true');
                yield localStorage.setItem('userId', response.data.data.user._id);
                yield put(actions.authSucces(true,response.data.data.user._id));
            }
        }catch(err) {
            yield put(actions.authFail(err.response.data));
        }
}
export function* logoutSaga(action) {

   yield localStorage.removeItem('isAuthenticate');
   yield localStorage.removeItem('userId');

   yield put(actions.logoutSucceed());
};

export function* logoutUserSaga(action ) {
    try{
        axios.get('/users/logout');
        yield put(actions.logout());
    }catch(err) {  }
}
