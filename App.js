import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.500"
        p="3"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
        This is a Box
      </Box>
    </NativeBaseProvider>
  );
}

function SettingsScreen() {
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.500"
        p="3"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
        This is a not Box
      </Box>
    </NativeBaseProvider>
  );
}

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
         <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Card" component={SettingsScreen}/>
            <Tab.Screen name="Swap" component={SettingsScreen}/>
            <Tab.Screen name="SendCoin" component={SettingsScreen}/>
            <Tab.Screen name="" component={SettingsScreen}/>
          </Tab.Navigator>
         </NavigationContainer>
    </NativeBaseProvider>
  );
}