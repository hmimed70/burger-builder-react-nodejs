import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isLogin: false,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store the token upon login', () => {
        expect(reducer({
            isLogin: false,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, { 
            type: actionTypes.AUTH_SUCCESS,
            isLogin: true,
            userId: 'some-user-id'
         })).toEqual({
            isLogin: true,
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    })
});
