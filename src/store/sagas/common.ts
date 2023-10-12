import {all, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* fetchBlogs({payload}) {
  const {onSuccess, onFail} = payload;

  try {
    const response = yield call(axios.get, '');

    onSuccess(response.data?.posts || []);
  } catch (error: any) {
    if (error?.message && onFail) {
      onFail(error.message);
    }
  }
}

function* properties() {
  yield all([takeLatest(getBlogs, fetchBlogs)]);
}

export default properties;
