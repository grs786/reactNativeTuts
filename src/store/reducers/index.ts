import {persistCombineReducers} from 'redux-persist';

import {RESET_GLOBAL_STATE} from '../actions/user-actions-types';
import app from './app';
import user from './user';
import home from './home';

import FilesystemStorage from 'redux-persist-filesystem-storage';

const config = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: ['app', 'signUp'],
};

const appReducer = persistCombineReducers<any, any>(config, {
  app,
  user,
  home,
});

const initialState = appReducer({}, {});

const rootReducer = (state: any, action: any) => {
  // Clear Global State Tree on LogOut
  if (action.type === RESET_GLOBAL_STATE) {
    state = initialState;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
