import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../screens/HomeScreen/Home';
import CardScreen from '../screens/Card';
import SwapScreen from '../screens/Swap';
import SendCoinScreen from '../screens/SendCoin';
import SettingsScreen from '../screens/Settings';
import ShakepayLogo from '../assets/ShakepayLogo.svg'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
          <Tab.Navigator >
            <Tab.Screen 
              name="Home" 
              component={HomeStackScreen}
              options={{headerTitle : () => <ShakepayLogo width={40} height={40}/>,
                        headerStyle: {
                          elevation: 0, // remove shadow on Android
                          shadowOpacity: 0, // remove shadow on iOS
                          borderBottomWidth: 0 // Just in case.
                        },
                        tabBarLabel:''
                      }}
              />
            <Tab.Screen 
              name="Card" 
              component={CardScreen}
              options={{ 
                headerStyle: {
                  elevation: 0, // remove shadow on Android
                  shadowOpacity: 0, // remove shadow on iOS
                  borderBottomWidth: 0 // Just in case.
                },
                tabBarLabel:'' }}/>
            <Tab.Screen 
              name="Swap" 
              component={SwapScreen}
              options={{ 
                headerStyle: {
                  elevation: 0, // remove shadow on Android
                  shadowOpacity: 0, // remove shadow on iOS
                  borderBottomWidth: 0 // Just in case.
                },
                tabBarLabel:'' }}/>
            <Tab.Screen 
              name="Shakepay a friend" 
              component={SendCoinScreen}
              options={{ 
                headerStyle: {
                  elevation: 0, // remove shadow on Android
                  shadowOpacity: 0, // remove shadow on iOS
                  borderBottomWidth: 0 // Just in case.
                },
                tabBarLabel:'' }}/>
            <Tab.Screen 
              name="Settings" 
              component={SettingsScreen}
              options={{ 
                headerStyle: {
                  elevation: 0, // remove shadow on Android
                  shadowOpacity: 0, // remove shadow on iOS
                  borderBottomWidth: 0 // Just in case.
                },
                tabBarLabel:'' }}/>
          </Tab.Navigator>
  );
}
export default Tabs;