import {LOGIN, FLIGHT} from "../lib/constants/actions";
import { takeLatest } from 'redux-saga/effects';
import * as login from './login';


export default function* rootSaga() {
    yield takeLatest(LOGIN.TRY_LOGIN,  login.tryLogin);
    yield takeLatest(FLIGHT.GET,  login.fetchFlight);
    yield takeLatest(FLIGHT.ADD,  login.addFlight);
}