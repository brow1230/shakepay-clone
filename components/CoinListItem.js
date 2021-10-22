import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BTC from '../assets/bitcoin-btc-logo.svg'
import ETH from '../assets/eth.svg'
import { SvgUri } from 'react-native-svg';
import { alignItems, fontSize } from 'styled-system';


export default function CoinListItem() {
  const [cryptoPrices, setCryptoPrices] = useState([])
  const [coins, setCoins] = useState([])

  // let cryptoPrices 
  useEffect(() => {
    const url = "http://192.168.1.110:3030/coins";

    const getUserData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCoins(json.data)
      } catch (error) {
        console.log("error", error);
      }
    };

    getUserData();

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
    getCryptoPrices();
}, []);
console.log(cryptoPrices[0])
  return (
    <View>
        
        {
            coins.map(function (coin, i) {
              let coinPriceData
              let matchCoinToPrice = () => {
                cryptoPrices.forEach(function(cryptoCoinPrice, i2){
                  if(cryptoCoinPrice.symbol === coin.ticker){
                    coinPriceData = cryptoCoinPrice.quote.CAD.price
                  }
                })
              }
              matchCoinToPrice()
              // console.log(coinPriceData)
              let [price, valueHeld] = [coin.price, coin.valueHeld]
              // let [price, valueHeld] = [coinPriceData, coin.valueHeld]
                  price = price.toLocaleString("en-US", {style:"currency", currency:"USD"})
                  valueHeld = valueHeld.toLocaleString("en-US", {style:"currency", currency:"USD"})




                    return(
                        <View style={styles.coinListItem} key={i}>
                            <SvgUri width="14%" height={35} uri={coin.logo}/>
                            <View style={styles.coin}>
                                <Text style={styles.coinName}> {coin.name} </Text>
                                <Text style={styles.coinPrice}> {price} </Text>
                            </View>
                            <View stlye={styles.wallet}>
                                <Text style={styles.coinHeld}> {parseFloat(coin.coinHeld).toFixed(2)} </Text> 
                                <Text style={styles.valueHeld}> {valueHeld} </Text>
                            </View>
                        </View>
                 )
            })
        }
    </View>
  )};

  const styles = StyleSheet.create({
      coinListItem: {
        flexDirection: 'row',
        height: 80,
        width:"100%",
        alignItems: 'center',
        alignSelf:'center',
      },
      coin:{
        width:"72%",
      },
      coinName:{
        fontSize:20,
        paddingBottom:5
      },
      coinPrice: {
          color:'#627fae',
          fontSize:16,
          fontWeight:'300'
      },
      wallet: {
        width: "16%",
      },
      coinHeld:{
        textAlign:'right',
        fontSize:20,
        paddingBottom:5

      },
      valueHeld:{
        textAlign:'right',
        color:'grey',
        fontSize:16,
        color:'#627fae',
        fontWeight:'300'

      },
  })