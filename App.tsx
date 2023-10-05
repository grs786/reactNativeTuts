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
import CommonButton from './src/commonComponent/CommonButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import BottomTabBar from './src/screens/BottomTabBar';
import LoginPage from './src/screens/LoginPage';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// type ButtonProps = PropsWithChildren<{
//   title: string;
//   onClick: () => void;
// }>;

// type ItemProps = {title: string};

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
//     title: '4th Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
//     title: '5th Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d723',
//     title: '6th Item',
//   },
// ];

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginPage">
        <Drawer.Screen
          name="LoginPage"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{title: 'navigate profile'}} />
        <Drawer.Screen name="BottomTabBar" component={BottomTabBar} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginPage}
          options={{title: 'LoginPage'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [updateVal, setUpdateVal] = useState('Native implementation');
//   const [number, setNumber] = useState('');

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const buttonOnPress = () => {
//     setUpdateVal('hello class');
//   };

//   const onChangeNumber = (val: string) => {
//     setNumber(val);
//   };

//   const Item = ({title}: ItemProps) => (
//     <TouchableOpacity style={styles.item} onPress={()=>alert(title)}>
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />

//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             alignItems: 'center',
//           }}>
//           <Text>{updateVal}</Text>
//           {/* <Button
//             title="Press button"
//             onPress={() => Alert.alert('Button pressed')}
//           /> */}
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeNumber}
//             value={number}
//             placeholder="Enter number value"
//             keyboardType="email-address"
//           />
//           {/* <OnClickButton title={'click button'} onClick={buttonOnPress} /> */}

//           <CommonButton
//             title="welcome button"
//             onClick={() => setUpdateVal('Hi folks')}
//           />

//           <FlatList
//             data={DATA}
//             renderItem={({item}) => <Item title={item.title} />}
//             keyExtractor={item => item.id}
//           />

//           <Image
//             style={styles.tinyLogo}
//             source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
//           />
//           {/* <Section title="Debug" />

//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks /> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

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

export default App;
