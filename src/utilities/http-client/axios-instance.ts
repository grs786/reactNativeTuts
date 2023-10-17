/* eslint-disable no-catch-shadow */
import axios from 'axios';
import {Platform} from 'react-native';

import apiPaths from '../../config/api-paths';
import {store} from '../../store';
import {logOut, setAccessToken} from '../../store/actions/user-actions-types';
import {AsyncStorage, getApiErrorMessage} from '../../utilities';

//dev url
// const API_URL = "http://ec2-15-207-234-87.ap-south-1.compute.amazonaws.com";

//stg url
const API_URL = 'http://ec2-65-0-212-250.ap-south-1.compute.amazonaws.com';

export const apiUrl = API_URL;

const getToken = async () => {
  let userData = await AsyncStorage.getItem('userInfo');
  userData = JSON.parse(userData);
  const storeState = store?.getState();

  // return storeState?.user?.userDetails?.data?.access;
  return userData?.access ?? storeState?.user?.userDetails?.data?.access;
};

const ignoreUrls = (url: string) => {
  const urls = [apiPaths?.GENERATE_OTP];
  return !urls.includes(url);
};

const containsResponseCodes = (code: number) => {
  const codes = [401, 403];
  return codes.includes(code);
};

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-origin-platform': Platform.OS,
  },
  // milliseconds * seconds * minutes
  timeout: 1000 * 60 * 2,
});

axiosInstance.interceptors.request.use(
  async request => {
    const token = await getToken();
    console.log('TOken236874', token);
    if (!token) {
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      };
    } else {
      console.warn('Failed to inject access token');
    }
    return request;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async err => {
    const originalConfig = err.config;

    if (err.response) {
      if (
        ignoreUrls(originalConfig.url) &&
        containsResponseCodes(err.response.status) &&
        !originalConfig._retry
      ) {
        // Refresh Token
        originalConfig._retry = true;

        try {
          const refresh = await AsyncStorage.getItem('refreshToken');
          if (!refresh) {
            throw new Error('');
          }
          const response = await axios.post(apiUrl + apiPaths?.REFRESH_TOKEN, {
            refresh,
          });
          const token = response.data.access;
          store?.dispatch(setAccessToken(token));
          // axiosInstance?.defaults?.headers?.Authorization = 'Bearer ' + token;
          return axiosInstance(originalConfig);
        } catch (error: any) {
          if (error.response && [401, 403].includes(error.response.status)) {
            return store?.dispatch(logOut());
          }

          if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
          }

          return Promise.reject(error);
        }
      }
    }
    getApiErrorMessage(err);
    return Promise.reject(err);
  },
);

export default axiosInstance;
