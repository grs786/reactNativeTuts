import {
  LOGIN_VIA_NUMBER_FAILURE,
  LOGIN_VIA_NUMBER_REQUESTED,
  LOGIN_VIA_NUMBER_SUCCESS,
  LOGIN_VIA_NUMBER_AND_OTP_REQUESTED,
  LOGIN_VIA_NUMBER_AND_OTP_SUCCESS,
  LOGIN_VIA_NUMBER_AND_OTP_FAILURE,
  RESEND_OTP_REQUESTED,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAILURE,
  ONBOARDING_IMG,
  ONBOARDING_IMG_REQUESTED,
  ONBOARDING_IMG_SUCCESS,
  ONBOARDING_IMG_FAILURE,
  UPDATE_PROFILE_REQUESTED,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  SET_ACCESS_TOKEN,
  SYNC_SMS_REQUESTED,
  SYNC_SMS_FAILURE,
  SYNC_SMS_SUCCESS,
  RESET_OTP_DATA,
  LOGOUT,
  LOGIN_SUCCESS,
} from '../actions/user-actions-types';
import {AsyncStorage} from '../../utilities';
import {
  GET_USER_PROFILE,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_SUCCESS,
} from '../actions/home-action-types';

interface InitalState {
  userDetails: any;
  loginViaNumberError: any;
  loginViaOTPError: any;
  resendOtpStatus: 'ideal' | 'loading' | 'success' | 'fail';
  onboardingImg: any;
  updatedProfile: any;
  SMS_data: any;
}

const initialState: InitalState = {
  userDetails: null,
  loginViaNumberError: null,
  loginViaOTPError: null,
  resendOtpStatus: 'ideal',
  onboardingImg: null,
  updatedProfile: null,
  SMS_data: null,
};

export default function user(state = initialState, {payload, type}) {
  console.log(type, 'ew7re86r762634873648');
  console.log(payload, 'payload-payload');
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginViaNumberError: null,
        userDetails: payload,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
