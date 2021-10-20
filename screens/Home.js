import React from 'react';
import {StyleSheet} from 'react-native';
import { Text, Box, VStack, Button,Icon } from 'native-base';
import {Ionicons} from "@expo/vector-icons"
import CoinListItem from '../components/CoinListItem'


export default function HomeScreen() {
  return (
          <VStack>
            <Box style={styles.boxStyle}>
              <Text style={styles.dollarAmountText} >  $1.88 </Text>
              <Button.Group style={styles.fundsButtonGroup}>
                <Button _text={{color:"primary.100"}} 
                        bg="primary.50"  
                        size={12}
                        width="45%"
                        leftIcon={<Icon as={Ionicons} name="arrow-down-outline" size="sm"/>}
                        >
                  Add funds
                </Button>
                <Button _text={{color:"primary.100"}} 
                        bg="primary.50"
                        size={12}
                        width="45%"
                        leftIcon={<Icon as={Ionicons} name="arrow-up-outline" size="sm"/>}
                        >
                  Send
                </Button>
              </Button.Group>
            </Box>
            <CoinListItem/>
          </VStack>
  )};

  const styles = StyleSheet.create({
    boxStyle: {
      width:'100%',
      paddingTop:'14%',
      paddingBottom:'5%',
      justifyContent:'center',
      backgroundColor:'white',
      alignItems:'center'
    },
    dollarAmountText:{
      fontSize:36,
      textAlign:'center',
      paddingVertical:25
    },
    fundsButtonGroup:{
      justifyContent:"space-evenly",
      paddingTop:10
    },

    
  })