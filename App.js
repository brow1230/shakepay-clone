import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/NavigationTabs'
import {userDataContext} from './Context.js';

// const userDataContext = React.createContext({user:{}});

export default function App() {
  let Stack = createNativeStackNavigator();
  let value = {user:{
    username: 'notsuperpopular',
    name: 'notsuperpopular',
    emailAdress: 'dummyemail@gmail.com',
    phoneNumber: '+17104206969',
    wallets:[
      {
        ticker:'CAD',
        currency:'Dollars',
        amountInWallet: 69.99,
        transactions:[{
          title: "Interact e-Transfer",
          time: "June 3",
          amount: 100.01,
          in: false,
          type: "transferOut"
      },{
        title: "Interact e-Transfer",
        time: "April 20",
        amount: 420.69,
        in: true,
        type: "transferIn"
    },] 
      },
      {
        ticker:'BTC',
        currency:'Bitcoin',
        amountInWallet: 0.0054435,
        transactions:[
          {
              title: "@shakingsats",
              time: "12 hours ago",
              amount: 0.00000405,
              in: true,
              type: "transferIn"
              // title: "in"
          },
          {
              title: "Sold Bitcoin",
              time: "12 hours ago",
              amount: 0.000009,
              in: false,
              type: "sell"
              // title: "in"
          },
          {
              title: "@Shakingsats",
              time: "a day ago",
              amount: 0.00000405,
              in: true,
              type: "transferIn"
              // title: "in"
          },
          {
              title: "@Shakingsats",
              time: "Friday",
              amount: 0.00000405,
              in: true,
              type: "transferIn"
              // title: "in"
          },
          {
              title: "@Shakingsats",
              time: "Thursday",
              amount: 0.00000405,
              in: true,
              type: "transferIn"
              // title: "in"
          },
          {
              title: "Recieved Bitcoin",
              time: "Wednesday",
              amount: 0.00000405,
              in: true,
              type: "buy"
          },
        ] ,
      },
      {
        ticker:'ETH',
        currency:'Ethereum',
        amountInWallet: 4.2,
        transactions:[] 
      },
    ],
    pointsHistory:[{
        title:'Waitlist position is locked in 🏁' ,
        day:'Sep 13th',
        points:420,
      },    {
        title:'#ShakingSats' ,
        day:'Sep 7th',
        points:7,
      },    {
        title:'#ShakingSats' ,
        day:'Sep 4th',
        points:7,
      },    {
        title:'Entered waitlist 🎉' ,
        day:'Jun 15th',
        points:420,
      }],
    verificationsCompleted: [
      {
        verificationItem:"account",
        verificationComplete:false
      },
      {
        verificationItem:"email",
        verificationComplete:true
      },
      {
        verificationItem:"phoneNumber",
        verificationComplete:true
      },
    ],
    interactAnwser: "H3LL0TH3R3",
    signUps:{
      number:1,
      activated:0,
      rewards:0
    }
  }}

  // const getUserData = async () => {
  //   console.log('backend called')
  //   const url = "http://192.168.1.109:3030/coins";
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     console.log('data', json.data)
      
  //     value.user = json.data
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // getUserData();
  // console.log('value', value)


  return ( 
    <SafeAreaView flex='1'>
      <NavigationContainer>
      <userDataContext.Provider value={value}>
          <Tabs/>
        </userDataContext.Provider>
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