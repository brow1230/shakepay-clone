import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  // 2. Use at the root of your app
  return (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Card" component={SettingsScreen}/>
            <Tab.Screen name="Swap" component={SettingsScreen}/>
            <Tab.Screen name="SendCoin" component={SettingsScreen}/>
            <Tab.Screen name="" component={SettingsScreen}/>
          </Tab.Navigator>
  );
}