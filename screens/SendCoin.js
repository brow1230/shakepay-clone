import React from 'react';import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function SendCoinScreen() {
  return (
    <NativeBaseProvider>
      <Text> this is a Send Coin page</Text>
    </NativeBaseProvider>
  )};