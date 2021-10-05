import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
            <Text> this is a Home page</Text>
    </NativeBaseProvider>
  )};