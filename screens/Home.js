import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home() {
  // 2. Use at the root of your app
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
  )};