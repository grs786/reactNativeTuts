import {LOGOUT, LOGIN_SUCCESS} from '../actions/user-actions-types';

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
