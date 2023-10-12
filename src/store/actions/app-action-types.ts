import {createAction} from 'redux-actions';

export const HIDE_LOADER = 'HIDE_LOADER';
export const hideLoader = createAction(HIDE_LOADER);

export const SHOW_LOADER = 'SHOW_LOADER';
export const showLoader = createAction(SHOW_LOADER);

export const LOGIN_VIA_CREDENTIALS = 'LOGIN_VIA_CREDENTIALS';
export const loginViaCredentials = createAction(LOGIN_VIA_CREDENTIALS);

export const LOGGED_IN_VIA_TOKEN = 'LOGGED_IN_VIA_TOKEN';
export const setLoggedInViaToken = createAction(LOGGED_IN_VIA_TOKEN);

export const UPDATE_USER_LANGUAGE = 'UPDATE_USER_LANGUAGE';
export const updateUserLanguage = createAction(UPDATE_USER_LANGUAGE);
