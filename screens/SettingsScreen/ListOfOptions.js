import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function ListOfOptions () {
    let list = [
      "Upload Selfie",
      "Refer A Friend",
      "Security & Privacy",
      "Help",
      "Price alerts",
      "Request transaction summary",
      "Blog",
      "Legal",
      "App Version",
      "Log Out",
    ]
    return (
      <View>
        {list.map((item, i) => {
          if(item === "App Version"){
            return(
              <View key={i}>
                <Text>{item}</Text>
                <Text>0.0.0</Text>
              </View>
            ) 
          }
          return(
              <View key={i}>
                <Text>{item}</Text>
                <Ionicons name="chevron-forward-outline"/>
              </View>
            )
        })}
      </View>
    )
  }
  // Colors used
// Light Blue: #f0f5ff
// Other Blue: #079efe
// Grey: #627fae


//  GREY BORDER SEPERATOR
//    borderBottomColor:'#f0f5ff',
//    borderBottomWidth: 2,

let styles = StyleSheet.create({
  parentView:{
    backgroundColor:'white',
    flex:1,
  },
  
})