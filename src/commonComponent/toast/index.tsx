import Snackbar from 'react-native-snackbar';

interface ToastProps {
  type?: 'error' | 'info' | 'warning' | 'success';
  text: string;
  duration?: 'LONG' | 'SHORT' | 'INDEFINITE';
  numberOfLines?: number;
  action?: {
    text: string;
    textColor?: string;
    onPress?: () => void;
  };
}

const getDuration = (duration: string | undefined) => {
  if (duration === 'LONG') {
    return Snackbar.LENGTH_LONG;
  }
  if (duration === 'SHORT') {
    return Snackbar.LENGTH_SHORT;
  }
  if (duration === 'INDEFINITE') {
    return Snackbar.LENGTH_INDEFINITE;
  }
  return Snackbar.LENGTH_SHORT;
};

const getTextColor = (type: string | undefined) => {
  if (type === 'error') {
    return '#721c24';
  }
  if (type === 'info') {
    return '#fff';
  }
  if (type === 'success') {
    return '#155724';
  }

  return '#fff';
};

const getBackgroundColor = (type: string | undefined) => {
  if (type === 'error') {
    return '#f5c6cb';
  }
  if (type === 'info') {
    return '#000';
  }
  if (type === 'success') {
    return '#d4edda';
  }

  return '#000';
};

class Toast {
  static show = (props: ToastProps) => {
    Snackbar.show({
      text: props.text || '',
      textColor: getTextColor(props.type),
      backgroundColor: getBackgroundColor(props.type),
      duration: getDuration(props.duration),
      numberOfLines: props.numberOfLines || 2,
      action: props.action,
    });
  };

  static hide = () => {
    Snackbar.dismiss();
  };
}

export default Toast;
