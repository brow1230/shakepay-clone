import React from 'react';
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function CardScreen() {
  return (
    <NativeBaseProvider>
      <Text> this is a Card page</Text>
    </NativeBaseProvider>
  )};