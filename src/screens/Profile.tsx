/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {RootState} from '../store/reducers';
import {useSelector} from 'react-redux';

function OnClickButton({title, onClick}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
function Profile(props: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {userDetails} = useSelector((state: RootState) => state.user);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {route} = props;
  console.log(route.params, 'propspropspropspropspropspropsprops');

  const buttonClick = () => {
    console.log('dfsgdhjfgsjdhf');
    route.params.buttonOnPress('reverse cyclic order');
  };
  useEffect(() => {
    console.log(userDetails, 'userDetailsuserDetailsuserDetails');
  }, [userDetails]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <OnClickButton title={'click button'} onClick={buttonClick} />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            alignItems: 'center',
          }}>
          <Text style={styles.sectionTitle}>{'Profile Page'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    margin: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Profile;
