import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../screens/Home';
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
                      }}}
              />
            <Tab.Screen name="Card" component={CardScreen}/>
            <Tab.Screen name="Swap" component={SwapScreen}/>
            <Tab.Screen name="SendCoin" component={SendCoinScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
          </Tab.Navigator>
  );
}
export default Tabs;