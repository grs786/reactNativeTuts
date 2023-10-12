import {createAction} from 'redux-actions';

export const LOGIN = 'LOGIN';
export const login = createAction(LOGIN);

export const LOGOUT = 'LOGOUT';
export const logOut = createAction(LOGOUT);

export const RESET_GLOBAL_STATE = 'RESET_GLOBAL_STATE';
export const resetGlobalState = createAction(RESET_GLOBAL_STATE);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE);

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const loginRequested = createAction(LOGIN_REQUESTED);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGIN_VIA_NUMBER = 'LOGIN_VIA_NUMBER';
export const loginViaNumber = createAction(LOGIN_VIA_NUMBER);

export const LOGIN_VIA_NUMBER_REQUESTED = 'LOGIN_VIA_NUMBER_REQUESTED';
export const loginViaNumberRequested = createAction(LOGIN_VIA_NUMBER_REQUESTED);

export const LOGIN_VIA_NUMBER_FAILURE = 'LOGIN_VIA_NUMBER_FAILURE';
export const loginViaNumberFailure = createAction(LOGIN_VIA_NUMBER_FAILURE);

export const LOGIN_VIA_NUMBER_SUCCESS = 'LOGIN_VIA_NUMBER_SUCCESS';
export const loginViaNumberSuccess = createAction(LOGIN_VIA_NUMBER_SUCCESS);

/* LOGIN OTP */
export const LOGIN_VIA_NUMBER_AND_OTP = 'LOGIN_VIA_NUMBER_AND_OTP';
export const loginViaNumberAndOTP = createAction(LOGIN_VIA_NUMBER_AND_OTP);

export const LOGIN_VIA_NUMBER_AND_OTP_REQUESTED =
  'LOGIN_VIA_NUMBER_AND_OTP_REQUESTED';
export const loginViaNumberAndOTPRequested = createAction(
  LOGIN_VIA_NUMBER_AND_OTP_REQUESTED,
);

export const LOGIN_VIA_NUMBER_AND_OTP_FAILURE =
  'LOGIN_VIA_NUMBER_AND_OTP_FAILURE';
export const loginViaNumberAndOTPFailure = createAction(
  LOGIN_VIA_NUMBER_AND_OTP_FAILURE,
);

export const LOGIN_VIA_NUMBER_AND_OTP_SUCCESS =
  'LOGIN_VIA_NUMBER_AND_OTP_SUCCESS';
export const loginViaNumberAndOTPSuccess = createAction(
  LOGIN_VIA_NUMBER_AND_OTP_SUCCESS,
);
export const RESET_OTP_DATA = 'RESET_OTP_DATA';
export const resetOtpData = createAction(RESET_OTP_DATA);

/* RESEND OTP */
export const RESEND_OTP = 'RESEND_OTP';
export const resendOTP = createAction(RESEND_OTP);

export const RESEND_OTP_REQUESTED = 'RESEND_OTP_REQUESTED';
export const resendOTPRequested = createAction(RESEND_OTP_REQUESTED);

export const RESEND_OTP_FAILURE = 'RESEND_OTP_FAILURE';
export const resendOTPFailure = createAction(RESEND_OTP_FAILURE);

export const RESEND_OTP_SUCCESS = 'RESEND_OTP_SUCCESS';
export const resendOTPSuccess = createAction(RESEND_OTP_SUCCESS);

/* ONBOARDING IMG */
export const ONBOARDING_IMG = 'ONBOARDING_IMG';
export const onboadingImg = createAction(ONBOARDING_IMG);

export const ONBOARDING_IMG_REQUESTED = 'ONBOARDING_IMG_REQUESTED';
export const onboadingImgRequested = createAction(ONBOARDING_IMG_REQUESTED);

export const ONBOARDING_IMG_FAILURE = 'ONBOARDING_IMG_FAILURE';
export const onboadingImgFailure = createAction(ONBOARDING_IMG_FAILURE);

export const ONBOARDING_IMG_SUCCESS = 'ONBOARDING_IMG_SUCCESS';
export const onboadingImgSuccess = createAction(ONBOARDING_IMG_SUCCESS);

/* UPDATE_PROFILE DATA */
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfileValues = createAction(UPDATE_PROFILE);

export const UPDATE_PROFILE_REQUESTED = 'UPDATE_PROFILE_REQUESTED';
export const updateProfileValuesRequested = createAction(
  ONBOARDING_IMG_REQUESTED,
);

export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const updateProfileValuesFailure = createAction(UPDATE_PROFILE_FAILURE);

export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const updateProfileValuesSuccess = createAction(UPDATE_PROFILE_SUCCESS);

/* SYNC SMS DATA */
export const SYNC_SMS = 'SYNC_SMS';
export const syncUserMsgs = createAction(SYNC_SMS);

export const SYNC_SMS_REQUESTED = 'SYNC_SMS_REQUESTED';
export const syncUserMsgsRequested = createAction(SYNC_SMS_REQUESTED);

export const SYNC_SMS_FAILURE = 'SYNC_SMS_FAILURE';
export const syncUserMsgsFailure = createAction(SYNC_SMS_FAILURE);

export const SYNC_SMS_SUCCESS = 'SYNC_SMS_SUCCESS';
export const syncUserMsgsSuccess = createAction(SYNC_SMS_SUCCESS);

/* SYNC USER LOCATION DATA */
export const SYNC_lOCATION = 'SYNC_lOCATION';
export const syncUserLoc = createAction(SYNC_lOCATION);

export const SYNC_lOCATION_REQUESTED = 'SYNC_lOCATION_REQUESTED';
export const syncUserLocRequested = createAction(SYNC_lOCATION_REQUESTED);

export const SYNC_lOCATION_FAILURE = 'SYNC_lOCATION_FAILURE';
export const syncUserLocFailure = createAction(SYNC_lOCATION_FAILURE);

export const SYNC_lOCATION_SUCCESS = 'SYNC_lOCATION_SUCCESS';
export const syncUserLocSuccess = createAction(SYNC_lOCATION_SUCCESS);

/* JWT TOKENS */
export const SET_ACCESS_TOKEN = 'SET_TOKEN';
export const setAccessToken = createAction(SET_ACCESS_TOKEN);
