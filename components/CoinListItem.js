import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BTC from '../assets/bitcoin-btc-logo.svg'
import ETH from '../assets/eth.svg'
import { SvgUri } from 'react-native-svg';
import { alignItems, fontSize } from 'styled-system';


export default function CoinListItem() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const url = "http://192.168.1.110:3030/coins";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setCoins(json.data)
            console.log("coins", coins);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    // getCoinList()
  return (
    <View>
        
        {
            coins.map(function (coin, i) {   
              let price = coin.price
                  price = price.toLocaleString("en-US", {style:"currency", currency:"USD"})
                    return(
                        <View style={styles.coinListItem}>
                            <SvgUri width="20%" height={33} uri={coin.logo}/>
                            <View style={styles.coin}>
                                <Text style={styles.coinName}> {coin.name} </Text>
                                <Text style={styles.coinPrice}> {price} </Text>
                            </View>
                            <View stlye={styles.wallet}>
                                <Text style={styles.coinHeld}> {parseFloat(coin.coinHeld).toFixed(2)} </Text> 
                                <Text style={styles.valueHeld}> ${parseFloat(coin.valueHeld).toFixed(2)} </Text>
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
        backgroundColor:"white",
        alignItems: 'center',
        alignSelf:'center',
      },
      coin:{
        width:"64%",
      },
      coinName:{
        fontSize:23,
      },
      coinPrice: {
          color:'grey',
          fontSize:14,
      },
      wallet: {
        width: "16%",
      },
      coinHeld:{
        textAlign:'right',
        // borderWidth:1,
        fontSize:18,
      },
      valueHeld:{
        textAlign:'right',
        color:'grey',
        // borderWidth:1,
        fontSize:14,
      },
  })