import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import CAD from '../assets/cad.svg'
import { SvgUri } from 'react-native-svg';

export default function CoinListItem(props) {
  const [cryptoPrices, setCryptoPrices] = [props.cryptoPrices, props.setCryptoPrices]
  const [coins, setCoins] = [props.coins, props.setCoins]
  // console.log('coins held',coins[2].amountInWallet)
  const wallets = props.wallets
  console.log(wallets)
  return (

    <View>
        {            
            wallets.map(function (coin, i) {
              let wallet = wallets[i];

              if(coin.ticker === 'CAD'){
                return(
                  <Pressable onPress={()=>props.navigation.navigate(coin.ticker,{coin:coin,wallet:wallet})} key={i}>
                    <View style={styles.coinListItem} >
                      <CAD width="14%" height={38} uri={coin.logo}/>
                      <View style={styles.coin}>
                          <Text style={styles.coinName}> {coin.currency} </Text>
                      </View>
                      <View stlye={styles.wallet}>
                          <Text style={styles.amountInWallet}> {parseFloat(wallet.amountInWallet).toFixed(2)} </Text> 
                      </View>
                    </View>
                  </Pressable>

                )
              }
              let coinPriceData
              let trueValueHeld = 0
              let matchCoinToPrice = () => {
                // console.log(cryptoPrices)
                cryptoPrices.forEach(function(cryptoCoinPrice, i2){
                  if(cryptoCoinPrice.symbol === wallet.ticker){
                    coinPriceData = parseFloat(cryptoCoinPrice.price).toFixed(2)
                    coinPriceData = coinPriceData.toLocaleString("en-US", {style:"currency", currency:"USD"})
                    trueValueHeld = coinPriceData * wallet.amountInWallet
                    console.log(trueValueHeld)
                  }
                })
              }
              matchCoinToPrice()
              let price = 1
              coinPriceData
                ?(
                price = parseInt(coinPriceData)
                  )
                :(
                price = 0
                  ) 
                      price = price.toLocaleString("en-US", {style:"currency", currency:"USD"})
              trueValueHeld = trueValueHeld.toLocaleString("en-US", {style:"currency", currency:"USD"})
              console.log(price)  
              return(
                <Pressable onPress={()=>props.navigation.navigate(coin.ticker,{wallet:wallet,price:price,held:trueValueHeld})} key={i}>
                    <View style={styles.coinListItem} >
                        {
                          coin.ticker === 'BTC'
                          ? <SvgUri width="14%" height={35} uri='https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg'/>
                          : <SvgUri width="14%" height={35} uri='https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg'/>
                        }
                        {/* <SvgUri width="14%" height={35} uri={coin.logo}/> */}
                        <View style={styles.coin}>
                            <Text style={styles.coinName}> {coin.currency} </Text>
                            <Text style={styles.coinPrice}> {price} </Text>
                        </View>
                        <View stlye={styles.wallet}>
                            <Text style={styles.amountInWallet}> {+(wallet.amountInWallet).toFixed(4)} </Text> 
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
      amountInWallet:{
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