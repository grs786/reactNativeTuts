import {all} from 'redux-saga/effects';
import home from './home';
import user from './user';
import common from './common';

const sagas = function* sagas() {
  yield all([home(), common(), user()]);
};

export default sagas;
