import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../screens/Home';
import CardScreen from '../screens/Card';
import SwapScreen from '../screens/Swap';
import SendCoinScreen from '../screens/SendCoin';
import SettingsScreen from '../screens/Settings';
import ShakepayLogo from '../assets/ShakepayLogo.svg'

const Tab = createBottomTabNavigator();

// function LogoTitle(){
//   return(
//     <ShakepayLogo width=40
//   )
// }

const Tabs = () => {
  return (
          <Tab.Navigator >
            <Tab.Screen 
              name="Home" 
              component={HomeStackScreen}
              options={{headerTitle : () => <ShakepayLogo width={40} height={40}/>}}/>
            <Tab.Screen name="Card" component={CardScreen}/>
            <Tab.Screen name="Swap" component={SwapScreen}/>
            <Tab.Screen name="SendCoin" component={SendCoinScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
          </Tab.Navigator>
  );
}

export default Tabs;