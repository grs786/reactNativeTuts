/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type ButtonProps = PropsWithChildren<{
  title: string;
  onClick: () => void;
}>;

function CommonButton({title, onClick}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CommonButton;
