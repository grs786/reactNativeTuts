/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import CommonButton from '../commonComponent/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const BottomTab = createBottomTabNavigator();

export default function BottomTabBar() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen options={{ tabBarBadge: 3 }} name="ProfileScreen" 
      component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}

