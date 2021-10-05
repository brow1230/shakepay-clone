import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import CardScreen from '../screens/Card';
import SwapScreen from '../screens/Swap';
import SendCoinScreen from '../screens/SendCoin';
import SettingsScreen from '../screens/Settings';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Card" component={CardScreen}/>
            <Tab.Screen name="Swap" component={SwapScreen}/>
            <Tab.Screen name="SendCoin" component={SendCoinScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
          </Tab.Navigator>
  );
}

export default Tabs;