import React from 'react';
import { NativeBaseProvider, Text, Box, VStack, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './components/NavigationTabs'

const Tab = createBottomTabNavigator();

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
         <NavigationContainer>
          <Tabs/>
         </NavigationContainer>
    </NativeBaseProvider>
  );
}