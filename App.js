import React from 'react';
import { NativeBaseProvider, Text, Box, VStack, StatusBar, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './components/NavigationTabs'

export default function App() {
  
  const theme = extendTheme({
    // components:{
    //   Button:{
    //     baseStyle:{
          
    //     }
    //   }
    // }
    colors:{
      primary:{
        50:'#f0f5ff',
        100:'#079efe',
      }
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
         <NavigationContainer>
          <Tabs/>
         </NavigationContainer>
    </NativeBaseProvider>
  );
}