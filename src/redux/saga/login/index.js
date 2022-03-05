import { put, call } from 'redux-saga/effects';
import { loginSuccess,returnFlight,flightAdded,showMessages } from '../../actions';
import { LoginService } from '../../services/demo';

export function* tryLogin(action) {
  yield put(showMessages(null));
  try {
    const {data}  = yield call(LoginService.getInstance().tryLogin, action.payload);
    if(data && data.access_token){
      localStorage.setItem('token',data.access_token);
    }
    yield put(loginSuccess(data));
  }
  catch (e) {
    yield put(showMessages({status:e.response.status,message:e.response.data.message}));
  }
}

export function* fetchFlight(action) {
  yield put(showMessages(null));
  try {
    const {data}  = yield call(LoginService.getInstance().fetchFlight, action.payload);
    yield put(returnFlight(data));
  }
  catch (e) {

  }
}


export function* addFlight(action) {
  yield put(showMessages(null));
  try {
    const {data}  = yield call(LoginService.getInstance().addFlight, action.payload);
    yield put(flightAdded(data));
    yield put(showMessages({status:200,message:data.message}));
  }
  catch (e) {
    yield put(showMessages({status:e.response.status,message:e.response.data.message}));
  }
}
