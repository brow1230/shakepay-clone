import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet,  Text, View, ScrollView, RefreshControl } from 'react-native';
import CoinListItem from '../../components/CoinListItem'
import Button from '../../components/Button'
import ModalMenu from '../../components/ModalMenu';


export default function HomeScreen(props){ 
  let navigation = props.navigation
  let wallets = props.value.user.wallets

  // console.log(wallets)

  const [cryptoPrices, setCryptoPrices] = useState([])
  const [isPricesLoaded, setPricesLoaded] = useState(false)
  const [coins, setCoins] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [isModalMenuOpen, toggleModalMenu] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  let ModalAddFundsOptions = [
    {
      title: "Interact e-Transer",
      icon:"pricetags-outline"
    },
    {
      title: "Bitcoin",
      icon:"pricetags-outline"
    },
    {
      title: "Ethereum",
      description: "Place a buy or sell order at a set price",
      icon:"pricetags-outline"
    },
    {
      title: "Wire transfer",
      description: "Place a buy or sell order at a set price",
      icon:"pricetags-outline"
    },
  ]
  const getUserData = async () => {
    console.log('backend called')
    const url = "http://192.168.1.109:3030/coins";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCoins(json.data)
      console.log('backend response set')
    } catch (error) {
      console.log("error", error);
    }
  };
  
  
  
  
  const getCryptoPrices = async () => {
    console.log('api called')
    let key = 'fe398cd49f6f46c74a6c250fccfbd7bc0856812f'
    let url = `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=BTC,ETH&convert=CAD&per-page=2&interval=1d`
    try {
        const response = await fetch(url)
        const json = await response.json();
        // console.log(json)
        // console.log(json.data)
        setCryptoPrices(json)
        setPricesLoaded(true)
        getTrueValue()
        console.log('crypto api response set')
    } catch (error) {
      console.log("error", error);
    }
  }

  // KNOWN BUG WITH getTrueValue
  // Will not display "Total True Value" at top of homescreen 
  // Fix is to save Home.js after opening the app, even if no changes have been made.
  // Cause is unknown.

  const getTrueValue = () => {
    console.log('getting value')
    let ttv = 1
    let priceData

    let prices = [cryptoPrices[0],cryptoPrices[1]]
    if(!isPricesLoaded) {
      return
    }
    wallets.forEach((wallet, i) => {
      prices.forEach((price, i2) => {
        if(wallet.ticker === price.symbol){
          priceData = price.price
          let val = parseFloat(priceData).toFixed(2) * wallet.amountInWallet
          ttv = ttv + val
        }else{
          console.log('price: ', price)  
        }
      })
    });
    console.log('total wallet value', ttv)
    setTotalValue(ttv)
  }
  // refresh 
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUserData();
    getCryptoPrices();
    getTrueValue();
    wait(600).then(() => { 
      setRefreshing(false)});
  }, []);

  useEffect(() => {
    let mounted = true;
    getUserData();
    getCryptoPrices();
    return () => mounted = false;
  }, [])

  return (
    <View style={styles.parentView}>
      
      <ModalMenu 
        isModalMenuOpen={isModalMenuOpen}
        toggleModalMenu={toggleModalMenu}
        options={ModalAddFundsOptions}
        />
      
      <View style={styles.boxStyle}>
        <Text style={styles.dollarAmountText} >  {parseFloat(totalValue).toFixed(2)} </Text>
        <View style={styles.fundsButtonGroup}>
          <Button buttonText="Add funds" buttonIcon="up" onButtonPress={ ()=>toggleModalMenu(!isModalMenuOpen)}/>
          <Button buttonText="Send" buttonIcon="down"/>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <CoinListItem 
          coins={coins} 
          cryptoPrices={cryptoPrices}
          isPricesLoaded={isPricesLoaded}
          totalValue={totalValue}
          navigation={navigation}
          wallets={wallets}
          // onButtonPress={() => {
          //   navigation.navigate('BTC')
          // console.log("pressed")}}
          />
      </ScrollView>      
    </View>
  )};

  const styles = StyleSheet.create({
    boxStyle: {
      width:'100%',
      paddingBottom:15,
      justifyContent:'center',
      backgroundColor:'white',
      alignItems:'center',
      borderBottomColor:'#f0f5ff',
      borderBottomWidth: 2,
    },
    dollarAmountText:{
      fontSize:36,
      textAlign:'center',
      paddingVertical:25
    },
    fundsButtonGroup:{
      flexDirection:'row',
      justifyContent:"space-between",
      paddingTop:25
    },
    parentView:{
      backgroundColor: 'white',
      height:'100%'
    
    },
  })