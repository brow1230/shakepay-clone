import React, {useState, useEffect} from 'react';
import { Button, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../screens/HomeScreen/HomeStack';
import CardScreen from '../screens/Card';
import SendCoinScreen from '../screens/SendCoin';

import ModalMenu from './ModalMenu';
import SettingsScreenProvider from '../screens/SettingsScreen/SettingsScreenProvider';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  const [isModalMenuOpen, toggleModalMenu] = useState(false)
  let globalModalOptions = [
    {
      title: "Buy & sell",
      description: "Buy and sell at current prices",
      icon:"swap-horizontal-outline",
    },
    {
      title: "Recurring buys",
      description: "Automatically buy every day, every week, or every month",
      icon:"reload-outline"
    },
    {
      title: "Limit orders",
      description: "Place a buy or sell order at a set price",
      icon:"pricetags-outline"
    },
  ]
  return (
  <View style={styles.parentView}>
    {/* Buy/Sell screen is ModalMenu */}
    <ModalMenu isModalMenuOpen={isModalMenuOpen} toggleModalMenu={toggleModalMenu} options={globalModalOptions}/>
      <Tab.Navigator >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            headerShown:false,
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
          component={ModalMenu}
          options={{ 
            presentation: "transparentModal",
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              borderBottomWidth: 0 // Just in case.
            },
            tabBarLabel:'' }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
                toggleModalMenu(!isModalMenuOpen)
              },
            }}
        />
        <Tab.Screen 
          name="Shakepay a friend" 
          component={SendCoinScreen}
          options={{ 
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              borderBottomWidth: 0 // Just in case.
            },
            tabBarLabel:'' }}
            />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreenProvider}
          options={{ 
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              borderBottomWidth: 0 // Just in case.
            },
            tabBarLabel:'' }}/>
      </Tab.Navigator>
      {/* </SafeAreaView> */}
  </View>
  );
}

let styles = StyleSheet.create({
  parentView:{
    // height:850
    height:'100%'
  }
})
export default Tabs;