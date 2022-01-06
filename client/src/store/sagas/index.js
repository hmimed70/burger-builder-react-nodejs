import { takeEvery } from "@redux-saga/core/effects";
import { authUserSaga, logoutSaga, logoutUserSaga } from "./auth";
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_LOGOUT_USER, logoutUserSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}