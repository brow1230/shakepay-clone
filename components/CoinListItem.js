import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, HStack, Box, VStack, Heading, Flex, Center } from 'native-base';
import BTC from '../assets/bitcoin-btc-logo.svg'
import ETH from '../assets/eth.svg'
import { SvgUri } from 'react-native-svg';
import { alignItems, fontSize } from 'styled-system';



// <HStack>
            {/* <BTC  width={40} height={40}/> */}
        //     <SvgUri width={40} height={40} uri="http://192.168.1.110:5000/bitcoin-btc-logo.svg"/>
        //     <VStack>
        //         <Text> Bitcoin </Text>a
        //         <Text> $69,000 </Text>
        //     </VStack>
        //     <VStack>
        //         <Text> 0.00 </Text>
        //         <Text> $4.85 </Text>
        //     </VStack>
        // </HStack>
export default function CoinListItem() {
    const [coins, setCoins] = useState([])


    // useEffect(getCoinList())
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
    <Box>
        
        {
            coins.map(function (coin, i) {
                return(
                    <HStack style={styles.coinListItem}>
                        <SvgUri width="20%" height={33} uri={coin.logo}/>
                        <VStack style={styles.coin}>
                            <Text fontSize={18}> {coin.name} </Text>
                            <Text> ${coin.price} </Text>
                        </VStack>
                        <VStack stlye={styles.wallet}>
                            <Text> {coin.coinHeld} </Text> 
                            <Text> ${coin.valueHeld} </Text>
                        </VStack>
                    </HStack>
            )})
        }
    </Box>
  )};

  const styles = StyleSheet.create({
      coinListItem: {
        height: "25%",
        width:"100%",
        backgroundColor:"white",
        alignItems: 'center',
        alignSelf:'center',
      },
      coinLogo:{
      },
      coin:{
          width:"70%",
      },
      wallet: {
        width: "10%",
      }
  })