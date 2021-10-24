import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Image } from 'react-native';
import CardInformation from '../components/CardInformation';

export default function CardScreen() {
  
  return (
    <ScrollView style={styles.parentView}>

    <Text>Shakepay Card</Text>
    <Text>Spend dollars, earn bitcoin</Text>
    <Image></Image>
    <Text>Hi @User </Text>
    <View>
      <View>
        <Text>70,977</Text>
        <Text>Waitlist Position</Text>
      </View>
      <View>
        <Text>123</Text>
        <Text>Points Earned</Text>
      </View>
    </View>
      <CardInformation/>
    </ScrollView>
  )};

let styles = StyleSheet.create({
  parentView:{
    backgroundColor:'white',
  },
})