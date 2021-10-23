import React, { useState } from 'react';
import {SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShakepayLogo from './assets/ShakepayLogo.svg'
import Tabs from './components/NavigationTabs'
import Button from './components/Button';

export default function App() {
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

  return ( 
    <SafeAreaView flex='1'>  
      <NavigationContainer>
        {/* {userData ? ( */}
          <Tabs/>
        {/* ) : ( */}
          {/* <Button buttonText="Log In" onButtonPress={() => {pressedLogIn()}}/> */}
        {/* )} */}
     </NavigationContainer>
    </SafeAreaView>
    );

}