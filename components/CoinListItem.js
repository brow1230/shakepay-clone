import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BTC from '../assets/bitcoin-btc-logo.svg'
import ETH from '../assets/eth.svg'
import { SvgUri } from 'react-native-svg';

export default function CoinListItem(props) {
  const [cryptoPrices, setCryptoPrices] = [props.cryptoPrices, props.setCryptoPrices]
  const [coins, setCoins] = [props.coins, props.setCoins]
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
              let [price, valueHeld] = [0,0] 
              coinPriceData?(
                [price, valueHeld] = [coinPriceData, coin.valueHeld]
              ) : (
                [price, valueHeld] = [coin.price, coin.valueHeld]
                )
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
        width:"50%",
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
        width: "36%",
        // alignItems:'flex-end'
      },
      coinHeld:{
        width:130,
        textAlign:'right',
        fontSize:20,
        paddingBottom:5,
        

      },
      valueHeld:{
        width:130,
        textAlign:'right',
        color:'grey',
        fontSize:16,
        color:'#627fae',
        fontWeight:'300'

      },
  })