import {all, call, put, select, takeLatest} from 'redux-saga/effects';
// import { Alert } from "react-native";

import api from '../../utilities/http-client';

import {
  loginViaNumberRequested,
  loginSuccess,
  loginFailure,
  LOGIN_VIA_NUMBER,
} from '../../store/actions/user-actions-types';
import {hideLoader, showLoader} from '../../store/actions/app-action-types';
import apiPaths from '../../config/api-paths';
import Toast from '../../commonComponent/toast';

const {GENERATE_OTP} = apiPaths;

function* loginViaNumber({payload}: any) {
  console.log('sdfhjsgdjfhgsdhjfghjsdgfjsdjhfg');
  yield put(showLoader());
  yield put(loginViaNumberRequested());

  const body = {
    mobile: payload?.mobile,
    country_code: payload?.country_code,
    check_user: payload?.check_user,
  };
  const {error, result} = yield call(
    api.get,
    'https://reactnative.dev/movies.json',
    {},
  );
  console.log(result, 'resultresultresultresult');
  if (!error) {
    yield put(loginSuccess(result));
    yield put(hideLoader());
    if (result) {
      console.log('loginViaNumber', result);
      // Toast.show({ text: result?.ui_message, type: "success" });
      // navigate("OTPScreen", { data: { ...payload, ...result?.data } });
      payload?.successCbk({data: {...payload, ...result}});
    } else {
      Toast.show({text: result?.ui_message, type: 'error'});
    }
  }

  if (error) {
    Toast.show({text: error.message, type: 'error'});
    yield put(loginFailure(error));
  }

  yield put(hideLoader());
}

function* User() {
  yield all([takeLatest(LOGIN_VIA_NUMBER, loginViaNumber)]);
}

export default User;
