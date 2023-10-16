import {getApiErrorMessage} from '..';
import axiosClient from './axios-instance';

function populateParams(url: string, params?: object) {
  if (url.includes(':') && params) {
    for (const [key, value] of Object.entries(params)) {
      if (url.includes(':' + key)) {
        url = url.replace(':' + key, value);
        delete params?.key;
      }
    }
  }
  return url;
}

function populateQuery(url: string, query?: object) {
  let queryString = '?';
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      queryString += `${key}=${value}&`;
    }
  }
  if (queryString !== '?') {
    return url + queryString;
  }
  return url;
}

interface ServerResponseInterface {
  status: number;
  data?: any;
}

interface ServerErrorInterface {
  code: number;
  message: string;
}

interface ResponseInterface {
  result?: any;
  error?: ServerErrorInterface | null;
}

interface IGet {
  params?: any;
  query?: any;
}

class HttpClient {
  response: ResponseInterface;

  constructor() {
    this.response = {
      result: null,
      error: null,
    };
  }

  get = async (url: string, payload: IGet = {params: {}, query: {}}) => {
    const {params, query} = payload;

    // url = populateParams(url, params);
    // url = populateQuery(url, query);
    console.log(url, 'asdhjagsdjhagsdjgahjsdghajsgd');
    return axiosClient
      .get(url)
      .then(this.handleReponse)
      .catch(this.handleError);
  };

  post = async (
    url: string,
    data: object,
    params?: object,
    config?: object,
  ) => {
    url = populateParams(url, params);
    return axiosClient
      .post(url, data, config)
      .then(this.handleReponse)
      .catch(this.handleError);
  };

  put = async (url: string, data: object, params?: object) => {
    url = populateParams(url, params);
    return axiosClient
      .put(url, data)
      .then(this.handleReponse)
      .catch(this.handleError);
  };

  patch = async (url: string, data: object, params?: object) => {
    url = populateParams(url, params);
    return axiosClient
      .patch(url, data)
      .then(this.handleReponse)
      .catch(this.handleError);
  };

  handleReponse = (response: ServerResponseInterface) => {
    if (response.status >= 200 && response.status < 300) {
      this.response.result = response.data;
      this.response.error = null;
    }
    return this.response;
  };

  handleError = (error: any) => {
    this.response.error = getApiErrorMessage(error);
    this.response.result = null;

    return this.response;
  };
}

export default new HttpClient();
