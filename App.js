import React from 'react';
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './components/NavigationTabs'

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
          <Tabs/>
         </NavigationContainer>
    </NativeBaseProvider>
  );
}