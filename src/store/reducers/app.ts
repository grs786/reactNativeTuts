import {
  HIDE_LOADER,
  SHOW_LOADER,
  LOGIN_VIA_CREDENTIALS,
  LOGGED_IN_VIA_TOKEN,
  UPDATE_USER_LANGUAGE,
} from '../actions/app-action-types';

const initialState = {
  type: 'loader',
  visible: false,
  isLoggedInViaCredentials: false,
  isLoggedInViaToken: false,
  safetyPassed: false,
};

export default function app(state = initialState, {payload, type}) {
  switch (type) {
    case HIDE_LOADER:
      return {
        ...state,
        type: payload || 'loader',
        visible: false,
      };

    case SHOW_LOADER:
      return {
        ...state,
        type: payload || 'loader',
        visible: true,
      };

    case LOGIN_VIA_CREDENTIALS:
      return {
        ...state,
        isLoggedInViaCredentials: payload,
      };

    case LOGGED_IN_VIA_TOKEN:
      return {
        ...state,
        isLoggedInViaToken: payload,
      };

    case UPDATE_USER_LANGUAGE:
      return {
        ...state,
        appUpdate: payload,
      };

    default:
      return state;
  }
}
