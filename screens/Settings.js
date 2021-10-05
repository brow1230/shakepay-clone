import React from 'react';
import { NativeBaseProvider, Text, Box, HStack } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function SettingsScreen() {
  return (
    <NativeBaseProvider>
      <Text> this is a Settings page</Text>
    </NativeBaseProvider>
  )};