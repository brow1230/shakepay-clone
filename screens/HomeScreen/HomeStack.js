import React from 'react';
import HomeScreenProvider from './HomeScreenProvider';
import ViewCoin from '../ViewCoin';
import ShakepayLogo from '../../assets/ShakepayLogo.svg'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
// <Tab.Screen
//   name="AdminTab"
//   children={() => <AdminPage userData={this.props.userSettings} />


export default function HomeStackScreen() {
//   console.log(value)
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="List View"
      component={HomeScreenProvider}
      options={{
        headerTitle : () => <ShakepayLogo width={40} height={40}/>,
        headerShadowVisible:false,
        headerBackTitleVisible: false,
      }}
      />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
      <HomeStack.Screen 
        name="CAD"
        // children={() => <ViewCoin coin="CAD"/>} 
        component={ViewCoin}
        options={{
          headerTitle : "Dollars",
          headerTitleStyle : {
            fontWeight:'500',
            fontSize: 20
          },
          headerShadowVisible:false,
          headerBackTitleVisible: false,
        }}/>
        <HomeStack.Screen 
        name="BTC"
        component={ViewCoin}
        // children={() => <ViewCoin coin="BTC" />} 
        options={{
          headerTitle : "Bitcoin",
          headerTitleStyle : {
            fontWeight:'500',
            fontSize: 20
          },
          headerShadowVisible:false,
          headerBackTitleVisible: false,
        }}/>
        <HomeStack.Screen 
        name="ETH"
        component={ViewCoin}
        // children={() => <ViewCoin coin="ETH"/>} 
        options={{
          headerTitle : "Ethereum",
          headerTitleStyle : {
            fontWeight:'500',
            fontSize: 20
          },
          headerShadowVisible:false,
          headerBackTitleVisible: false,
        }}/>
    </HomeStack.Navigator>
  );
}