import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import BTC from '../assets/bitcoin-btc-logo.svg'
import ETH from '../assets/eth.svg'
import { SvgUri } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CoinListItem(props) {
  const [cryptoPrices, setCryptoPrices] = [props.cryptoPrices, props.setCryptoPrices]
  const [coins, setCoins] = [props.coins, props.setCoins]
  // console.log('coins held',coins[2].coinHeld)


  // console.log 
  // let x = coins.length()
  // if(x === 0) return <> </>

  return (
    // <Stack. 
    <View>
        {            
            coins.map(function (coin, i) {
              if(coin.ticker === 'CAD'){
                return(
                  
                  <Pressable onPress={()=>props.navigation.navigate(coin.ticker,{coin:coin})} >
                    <View style={styles.coinListItem} key={i}>
                      <SvgUri width="14%" height={38} uri={coin.logo}/>
                      <View style={styles.coin}>
                          <Text style={styles.coinName}> {coin.name} </Text>
                      </View>
                      <View stlye={styles.wallet}>
                          <Text style={styles.coinHeld}> {parseFloat(coin.coinHeld).toFixed(2)} </Text> 
                      </View>
                    </View>
                  </Pressable>

                )
              }
              let coinPriceData
              let trueValueHeld = 0
              let matchCoinToPrice = () => {
                cryptoPrices.forEach(function(cryptoCoinPrice, i2){
                  if(cryptoCoinPrice.symbol === coin.ticker){
                    coinPriceData = cryptoCoinPrice.quote.CAD.price
                    trueValueHeld = coinPriceData * coin.coinHeld
                    // getTotalValue(totalValue+true)
                  }
                })
              }
              matchCoinToPrice()
              let price = 1
              coinPriceData?(
                price = coinPriceData
                // console.log(price)
              ) : (
                price = 0
                // console.log(price)
              )
                      price = price.toLocaleString("en-US", {style:"currency", currency:"USD"})
              trueValueHeld = trueValueHeld.toLocaleString("en-US", {style:"currency", currency:"USD"})
              // console.log(price)  
              return(
                <Pressable onPress={()=>props.navigation.navigate(coin.ticker,{coin:coin.coinPrice,price:price,held:trueValueHeld})}>
                    <View style={styles.coinListItem} key={i}>
                        <SvgUri width="14%" height={35} uri={coin.logo}/>
                        <View style={styles.coin}>
                            <Text style={styles.coinName}> {coin.name} </Text>
                            <Text style={styles.coinPrice}> {price} </Text>
                        </View>
                        <View stlye={styles.wallet}>
                            <Text style={styles.coinHeld}> {parseFloat(coin.coinHeld).toFixed(2)} </Text> 
                            <Text style={styles.valueHeld}> {trueValueHeld} </Text>
                        </View>
                    </View>
                  </Pressable>
                 )
            })
        }
    </View>
  )};

  const styles = StyleSheet.create({
      coinListItem: {
        flexDirection: 'row',
        margin:10,
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