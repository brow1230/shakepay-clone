import React, {useState, useCallback} from 'react';
import {StyleSheet,  Text, View, ScrollView, RefreshControl } from 'react-native';
import CoinListItem from '../../components/CoinListItem'
import Button from '../../components/Button'
import ModalMenu from '../../components/ModalMenu';

export default function HomeScreen(){ 
  const [cryptoPrices, setCryptoPrices] = useState([])
  const [coins, setCoins] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [isModalMenuOpen, toggleModalMenu] = useState(false)

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
    } catch (error) {
      console.log("error", error);
    }
  };
  const getCryptoPrices = async () => {
    console.log('api called')
    let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=CAD'
    const options = {
      method: 'GET',
      qs: {
        'start': '1',
        'limit': '1',
        'convert': 'AUD'
      },
      headers:{
        'X-CMC_PRO_API_KEY':'d2a0ea04-8e48-45a5-8fb6-641ee66c181d'
      },
      json: true,
      gzip: true
    }
    try {
        const response = await fetch(url, options)
        const json = await response.json();
        setCryptoPrices(json.data)
    } catch (error) {
      console.log("error", error);
    }
  }
  function getTrueValue(){
    console.log('getting value')
    let ttv = 0
    let coinPriceData
    coins.forEach(coin => {
        cryptoPrices.forEach(price =>{
          if(coin.ticker === price.symbol){
            console.log(coin.coinHeld)
            coinPriceData = price.quote.CAD.price
            let value = parseFloat(coinPriceData).toFixed(2) * coin.coinHeld 
            console.log("one", value)
            console.log("two", ttv)
            
            ttv = ttv + value
            console.log("three", ttv)
          }
        })
    });  
    setTotalValue(ttv)
  }


  // refresh 
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUserData();
    getCryptoPrices();
    getTrueValue();
    wait(600).then(() => { 
      setRefreshing(false)});
  }, []);


  return (
    <View style={styles.parentView}>
      
      <ModalMenu isModalMenuOpen={isModalMenuOpen} toggleModalMenu={toggleModalMenu} options={ModalAddFundsOptions}/>
      
      
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
          getCoins={setCoins} 
          getPrices={setCryptoPrices}
          totalValue={totalValue}
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