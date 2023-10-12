import dayjs from 'dayjs';
import {Platform} from 'react-native';
import strings from '../resources/strings';


export {default as AsyncStorage} from '@react-native-async-storage/async-storage';
export {default as querystring} from 'query-string';

export const formatTime = (seconds: number) => {
  const format = val => `0${Math.floor(val)}`.slice(-2);
  const minutes = (seconds % 3600) / 60;

  return [minutes, seconds % 60].map(format).join(':');
};

export const formatDate = (date: string, formatString?: string) => {
  if (date) {
    return dayjs(date).format(formatString || 'MMM DD, YYYY');
  }
  return '';
};

export const numDifferentiation = (val: string) => {
  if (!val) {
    return '';
  }
  let num = parseInt(val?.replace?.('₹', '')?.replace?.(/,/g, ''));
  if (!num) {
    return val;
  }
  let result = '';

  if (num >= 10000000) {
    result = '₹ ' + (num / 10000000).toFixed(2) + ' Cr';
  } else if (num >= 100000) {
    result = '₹ ' + (num / 100000).toFixed(2) + ' Lakh';
  }

  return result;
};

export const getFormattedMobileNumber = (mobileNumber: string) => {
  if (!mobileNumber) {
    return '';
  }
  return (
    '+91 ' +
    mobileNumber.slice(0, 5) +
    mobileNumber.slice(6).replace(/[a-z0-9._-]/gi, '*')
  );
};

export const getFormattedEmail = (email: string) => {
  if (!email) {
    return '';
  }
  const index = email.lastIndexOf('@');
  return (
    email.slice(0, index).replace(/[a-z0-9._-]/gi, '*') + email.slice(index)
  );
};

export const intToEnglish = (number: number) => {
  const NS = [
    {value: 10000000, str: 'Crore'},
    {value: 100000, str: 'Lakh'},
    {value: 1000, str: 'Thousand'},
    {value: 100, str: 'Hundred'},
    {value: 90, str: 'Ninety'},
    {value: 80, str: 'Eighty'},
    {value: 70, str: 'Seventy'},
    {value: 60, str: 'Sixty'},
    {value: 50, str: 'Fifty'},
    {value: 40, str: 'Forty'},
    {value: 30, str: 'Thirty'},
    {value: 20, str: 'Twenty'},
    {value: 19, str: 'Nineteen'},
    {value: 18, str: 'Eighteen'},
    {value: 17, str: 'Seventeen'},
    {value: 16, str: 'Sixteen'},
    {value: 15, str: 'Fifteen'},
    {value: 14, str: 'Fourteen'},
    {value: 13, str: 'Thirteen'},
    {value: 12, str: 'Twelve'},
    {value: 11, str: 'Eleven'},
    {value: 10, str: 'Ten'},
    {value: 9, str: 'Nine'},
    {value: 8, str: 'Eight'},
    {value: 7, str: 'Seven'},
    {value: 6, str: 'Six'},
    {value: 5, str: 'Five'},
    {value: 4, str: 'Four'},
    {value: 3, str: 'Three'},
    {value: 2, str: 'Two'},
    {value: 1, str: 'One'},
  ];

  let result = '';
  for (const n of NS) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) {
          result += ' ';
        }
      } else {
        const t = Math.floor(number / n.value);
        const d = number % n.value;
        if (d > 0) {
          return intToEnglish(t) + ' ' + n.str + ' ' + intToEnglish(d);
        } else {
          return intToEnglish(t) + ' ' + n.str;
        }
      }
    }
  }
  return result;
};

export const getPasswordSuggestion = (password: string) => {
  const result = {
    message: '',
    style: {
      color: '',
    },
  };

  if (password.length === 0) {
    return result;
  }

  const strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );
  const mediumRegex = new RegExp(
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})',
  );
  if (strongRegex.test(password)) {
    result.message = strings.changePassword.strongPasswordMessage;
    result.style = {
      color: 'green',
    };
    return result;
  }
  if (mediumRegex.test(password)) {
    result.message = strings.changePassword.mediumPasswordMessage;
    result.style = {
      color: 'orange',
    };
    return result;
  }

  result.message = strings.changePassword.weakPasswordMessage;
  result.style = {
    color: 'orange',
  };

  return result;
};

export const getCurrencyText = (text: string) => {
  if (text && parseInt(text).toString() !== 'NaN') {
    return new Intl.NumberFormat('en-IN').format(parseInt(text));
  }
  return '';

  if (Platform.OS === 'ios') {
    if (text && parseInt(text).toString() !== 'NaN') {
      return parseInt(text).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        currency: 'INR',
      });
    }
    return '';
  }
  if (Platform.OS === 'android') {
    if (text && parseInt(text).toString() !== 'NaN') {
      return new Intl.NumberFormat('en-IN').format(parseInt(text));
    }
    return '';
  }
};

export const getApiErrorMessage = (error: any) => {
  let errorResponse = {
    code: 500,
    message: strings.common.serverError,
  };

  if (error?.response) {
    errorResponse = {
      code: error.response.status,
      message:
        error.response.data?.message ||
        (typeof error.response.data?.errors === 'string'
          ? error.response.data?.errors
          : error.response.data?.errors?.[0]) ||
        strings.common.serverError,
    };
  } else if (!error.status) {
    errorResponse = {
      code: 500,
      message: error.message || strings.common.serverError,
    };
  } else {
    errorResponse = {
      code: error.status,
      message: error?.message || strings.common.serverError,
    };
  }
  return errorResponse;
};

/**
  1. External Lib
  2. personal small kind of lib
*/
