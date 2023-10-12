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
  switch (type) {
    case LOGIN_VIA_NUMBER_REQUESTED:
      return {
        ...state,
        loginViaNumberError: '',
      };

    case LOGIN_VIA_NUMBER_FAILURE:
      return {
        ...state,
        loginViaNumberError: payload,
      };

    case LOGIN_VIA_NUMBER_SUCCESS:
      return {
        ...state,
        loginViaNumberError: null,
        userDetails: payload,
      };

    case RESEND_OTP_REQUESTED:
      return {
        ...state,
        resendOtpStatus: 'loading',
      };

    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        resendOtpStatus: 'success',
      };

    case RESEND_OTP_FAILURE:
      return {
        ...state,
        resendOtpStatus: 'fail',
      };

    case LOGIN_VIA_NUMBER_AND_OTP_REQUESTED:
      return {
        ...state,
        loginViaOTPError: null,
      };

    case LOGIN_VIA_NUMBER_AND_OTP_SUCCESS:
      return {
        ...state,
        loginViaOTPError: null,
        userDetails: payload,
      };

    case LOGIN_VIA_NUMBER_AND_OTP_FAILURE:
      return {
        ...state,
        loginViaNumberError: payload,
      };

    ////////
    case ONBOARDING_IMG_REQUESTED:
      return {
        ...state,
        onboardingImg: null,
      };

    case ONBOARDING_IMG_SUCCESS:
      return {
        ...state,
        onboardingImg: payload,
      };

    case ONBOARDING_IMG_FAILURE:
      return {
        ...state,
        onboardingImg: payload,
      };

    case RESET_OTP_DATA:
      return {
        ...state,
        userDetails: null,
      };

    case UPDATE_PROFILE_REQUESTED:
      return {
        ...state,
        updatedProfile: null,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updatedProfile: payload,
      };

    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updatedProfile: payload,
      };

    case SYNC_SMS_REQUESTED:
      return {
        ...state,
        SMS_data: null,
      };

    case SYNC_SMS_SUCCESS:
      return {
        ...state,
        SMS_data: payload,
      };

    case SYNC_SMS_FAILURE:
      return {
        ...state,
        SMS_data: payload,
      };

    case SET_ACCESS_TOKEN:
      AsyncStorage.setItem('accessToken', payload || '');
      return {
        ...state,
        accessToken: payload,
      };
    case GET_USER_PROFILE:
      return state;

    case USER_PROFILE_UPDATE:
      return state;

    case USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        updatedProfile: payload,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
