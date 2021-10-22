import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { NativeBaseProvider, Text, Box, VStack, StatusBar, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './components/NavigationTabs'

export default function App() {

  return (    
      <SafeAreaView flex='1'>  
        <NavigationContainer>
          <Tabs/>
        </NavigationContainer>
      </SafeAreaView>
  );
}