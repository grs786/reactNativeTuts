/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
import CommonButton from '../commonComponent/CommonButton';
import {useNavigation} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type ButtonProps = PropsWithChildren<{
  title: string;
  onClick: () => string;
}>;

type ItemProps = {title: string};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: '4th Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: '5th Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: '6th Item',
  },
];

function LoginPage(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [updateVal, setUpdateVal] = useState('Login page');
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const buttonOnPress = (title) => {
    console.log(title,"sdhgsdjhgfjhsdgfjhf")
    setUpdateVal(title);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            alignItems: 'center',
          }}>
          {/* <Button
            title="Press button"
            onPress={() => Alert.alert('Button pressed')}
          /> */}

          {/* <OnClickButton title={'click button'} onClick={buttonOnPress} /> */}
          <Text>{updateVal}</Text>

          <CommonButton
            title="welcome button"
            onClick={() =>
              navigation.navigate('Profile', {
                buttonOnPress: (title) => {console.log(title,"sdfhjgdhjfgsdhjfgshjdfgjhsdfgjhsdgfj")},
                statevalue: 'route from login',
              })
            }
          />

          <Image
            style={styles.tinyLogo}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
          {/* <Section title="Debug" />

          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
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

export default LoginPage;
