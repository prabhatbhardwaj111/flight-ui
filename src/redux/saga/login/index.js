import { put, call } from 'redux-saga/effects';
import { loginSuccess,returnFlight,flightAdded } from '../../actions';
import { LoginService } from '../../services/demo';

export function* tryLogin(action) {
  try {
    const {data}  = yield call(LoginService.getInstance().tryLogin, action.payload);
    if(data && data.access_token){
      localStorage.setItem('token',data.access_token);
    }
    yield put(loginSuccess(data));
  }
  catch (e) {

  }
}

export function* fetchFlight(action) {
  try {
    const {data}  = yield call(LoginService.getInstance().fetchFlight, action.payload);
    yield put(returnFlight(data));
  }
  catch (e) {

  }
}


export function* addFlight(action) {
  
  try {
    const {data}  = yield call(LoginService.getInstance().addFlight, action.payload);
    yield put(flightAdded(data));
  }
  catch (e) {

  }
}
