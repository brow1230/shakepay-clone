import React, {useState, useCallback} from 'react';
import {StyleSheet,  Text, View, ScrollView, RefreshControl } from 'react-native';
import CoinListItem from '../components/CoinListItem'
import Button from '../components/Button'

export default function HomeScreen(){ 
  const [cryptoPrices, setCryptoPrices] = useState([])
  const [coins, setCoins] = useState([])
  const [totalValue, setTotalValue] = useState(0)

  
  const getUserData = async () => {
    const url = "http://192.168.1.110:3030/coins";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCoins(json.data)
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCryptoPrices = async () => {
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

  function addTotalValue(){
    let cointaner = 0
    coins.forEach((coin)=>{
      console.log(coin)
      cointaner = cointaner + coin.valueHeld 
    })
    cointaner = cointaner.toLocaleString("en-US", {style:"currency", currency:"USD"})
    setTotalValue(cointaner)
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
    addTotalValue()
    wait(250).then(() => setRefreshing(false));
  }, []);


  return (
          <View style={styles.parentView}>
            <View style={styles.boxStyle}>
              <Text style={styles.dollarAmountText} >  {totalValue} </Text>
                <View style={styles.fundsButtonGroup}>
                  <Button buttonText="Add funds" buttonIcon="up" />
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
          setTotalValue={setTotalValue}
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