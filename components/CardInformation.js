import React from 'react';
import {StyleSheet,  Text, View, Image } from 'react-native';

const cardCoins = require('../assets/cardcoins.png')
const btc = require('../assets/btc.png')
const cad = require('../assets/cad.png')
const gpay = require('../assets/gpay.png')
const timewatch = require('../assets/timewatch.png')
const safety = require('../assets/safety.png')

export default function CardInformation() {
  const imagePath = '../assets/'
  const pageCardInfoContent = [
      {
        img: cardCoins, 
        header : "The easiest way to earn Bitcoin",
        body : "Up to 2% back. Settled automatically to the bitcoin balance in your Shakepay account."
      },
      {
       img: btc,
       header: "Real bitcoin rewards",
       body : "Store or cash out your bitcoin anytime. "
      },
      {
        img: cad,
        header: "Spend hassle-free",
        body : "Load your Shakepay Canadian dollar balance with Interact e-Transfer and spend anywhere."
      },
      {
        img: gpay,
        header: "Shop worldwide",
        body : "Shop online or in-store, Pay with Apple pay or Google Pay"
      },
      {
        img:timewatch,
        header: "Quick Setup",
        body : "No annual fee or credit checks. Live in all provinces and territories"
      },
      {
        img: safety,
        header: "Security First",
        body : "Freeze your card, set up 2FA or get support in a few taps."
      }
    ]

  return (
      <View style={styles.cardGroupContainer}>
        {pageCardInfoContent.map((CardInfo) => {
          let source = imagePath + CardInfo
        return (
          <View style={styles.cardContainer}>
            {/* <SvgUri width="10%" uri={CardInfo.img}/> */}
            <Image source={CardInfo.img} style={styles.image}/>
            {/* <Cardcoins/> */}
            <Text style={styles.headerText}>{CardInfo.header}</Text>
            <Text style={styles.bodyText}>{CardInfo.body}</Text>
          </View>)
    })}
      </View>
  )};

let styles = StyleSheet.create({
  parentView:{
    backgroundColor:'white',
  },
  cardGroupContainer:{
    width:'90%',
    margin:'5%'
  },
  cardContainer:{
    paddingVertical:10,
  },
  image:{
    width:40,
    //  padding:60,
    resizeMode:'contain',
  },
  gpayImage:{
    width:60,
    //  padding:60,
    resizeMode:'contain',
  },
  headerText:{
    fontSize: 27,
    fontWeight:'400',
  },
  bodyText:{
    fontSize: 18,
    color:'grey'
  },
})