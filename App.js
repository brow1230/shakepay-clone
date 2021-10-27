import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/NavigationTabs'
import ModalMenu from './components/ModalMenu';

export default function App() {
  let Stack = createNativeStackNavigator();
  const UserDataContext = React.createContext({user:{}});
  let value = {user:{}}

  const getUserData = () => {
    
  }
  // const [AppState, setAppState] = useState({})
  // setAppState({
  //   user:{

  //   }
  // })


  return ( 
    <SafeAreaView flex='1'>
      <NavigationContainer>
            <Tabs/>
      </NavigationContainer>
    </SafeAreaView>
    );
  }

  // UNUSED CODE 

  // const [userData, setUserData] = useState(null)
  // const [isLoggedIn, logIn] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)
  // const [cryptoPrices, setCryptoPrices] = useState([])
  // const [coins, setCoins] = useState([])


  // // let coinInformation

  // // if(isLoading){
  // //   return (
  // //     <SafeAreaView flex='1' alignItems='center'> 
  // //       <ShakepayLogo width={250}/>
  // //     </SafeAreaView>
  // //   )
  // // }


  // const getUserData = async () => {
  //   const url = "http://192.168.1.110:3030/coins";
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setCoins(json.data)
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // const getCryptoPrices = async () => {
  //   let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=CAD'
  //   const options = {
  //     method: 'GET',
  //     qs: {
  //       'start': '1',
  //       'limit': '1',
  //     },
  //     headers:{
  //       'X-CMC_PRO_API_KEY':'d2a0ea04-8e48-45a5-8fb6-641ee66c181d'
  //     },
  //     json: true,
  //     gzip: true
  //   }
  //   try {
  //       const response = await fetch(url, options)
  //       const json = await response.json();
  //       setCryptoPrices(json.data)
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  // function pressedLogIn(){
  //   getUserData();
  //   getCryptoPrices();
  //   console.log(coins)
  // }