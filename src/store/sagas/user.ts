import {all, call, put, select, takeLatest} from 'redux-saga/effects';
// import { Alert } from "react-native";

import api from '../../utilities/http-client';
import {AsyncStorage} from '../../utilities';

import {
  loginViaNumberAndOTPRequested,
  loginViaNumberAndOTPSuccess,
  loginViaNumberRequested,
  loginSuccess,
  loginFailure,
  LOGIN_VIA_NUMBER,
  LOGIN_VIA_NUMBER_AND_OTP,
  RESEND_OTP,
  resendOTPRequested,
  resendOTPFailure,
  resendOTPSuccess,
  LOGOUT,
  resetGlobalState,
} from '../../store/actions/user-actions-types';
import {hideLoader, showLoader} from '../../store/actions/app-action-types';
import apiPaths from '../../config/api-paths';
import {persistor} from '../../store';
import Toast from '../../commonComponent/toast';

const {GENERATE_OTP, VERIFY_OTP, REGENERATE_OTP} = apiPaths;

function* loginViaNumber({payload}: any) {
  yield put(showLoader());
  yield put(loginViaNumberRequested());

  const body = {
    mobile: payload?.mobile,
    country_code: payload?.country_code,
    check_user: payload?.check_user,
  };
  const {error, result} = yield call(api.post, GENERATE_OTP, body);

  if (!error) {
    yield put(loginSuccess(result));
    yield put(hideLoader());
    if (result?.status === 200) {
      console.log('loginViaNumber', result);
      // Toast.show({ text: result?.ui_message, type: "success" });
      // navigate("OTPScreen", { data: { ...payload, ...result?.data } });
      payload?.successCbk({data: {...payload, ...result?.data}});
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

function* loginViaNumberAndOTP({payload}: any) {
  yield put(showLoader());
  yield put(loginViaNumberAndOTPRequested());
  const body = {mobile: payload?.mobile, otp: payload?.otp};

  const {error, result} = yield call(api.post, VERIFY_OTP, body);
  if (!error) {
    yield put(loginViaNumberAndOTPSuccess(result));
    yield put(hideLoader());
    if (result?.status === 200) {
      const userDetails = result?.data;
      console.log('saga => userDetails', userDetails);
      AsyncStorage.setItem('userInfo', JSON.stringify(userDetails));
    } else {
      Toast.show({
        text: result?.ui_message ?? result?.developer_message,
        type: 'error',
      });
    }
  }

  if (error) {
    Toast.show({text: error.message, type: 'error'});
    yield put(loginFailure(error));
  }

  yield put(hideLoader());
}
function* resendOTP({payload}: any) {
  yield put(showLoader());
  yield put(resendOTPRequested());

  const body = {
    ...payload,
    verification_type: 'LOGIN',
  };

  const {error, result} = yield call(api.post, REGENERATE_OTP, body);

  if (!error) {
    yield put(resendOTPSuccess());
    if (result?.status === 200) {
      // Toast.show({ text: result?.ui_message, type: "success" });
    } else {
      Toast.show({
        text: result?.ui_message ?? result?.developer_message,
        type: 'error',
      });
    }
  }

  if (error) {
    Toast.show({text: error.message, type: 'error'});
    yield put(resendOTPFailure());
  }

  yield put(hideLoader());
}

function* makeUserLogout() {
  // CLEAR LOCAL CACHE FROM REDUX-PERSISTOR
  persistor.purge();

  // RESET GLOBAL STATE TREE
  yield put(resetGlobalState());
}

function* User() {
  yield all([
    takeLatest(LOGIN_VIA_NUMBER, loginViaNumber),
    takeLatest(RESEND_OTP, resendOTP),
    takeLatest(LOGIN_VIA_NUMBER_AND_OTP, loginViaNumberAndOTP),
    takeLatest(LOGOUT, makeUserLogout),
  ]);
}

export default User;
