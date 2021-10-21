import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, } from 'react-native';
import CoinListItem from '../components/CoinListItem'
import { background } from 'styled-system';
import Button from '../components/Button'

export default function HomeScreen() {
  // NewButton("button!!!")
  return (
          <View>
            <View style={styles.boxStyle}>
              <Text style={styles.dollarAmountText} >  $1.88 </Text>
                <View style={styles.fundsButtonGroup}>
                  <Button buttonText="Add funds" />
                  <Button buttonText="Send" />
                </View>
            </View>
            <CoinListItem/>
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
      paddingTop:15
    },
  })