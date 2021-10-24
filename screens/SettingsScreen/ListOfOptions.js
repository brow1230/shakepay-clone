import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { alignSelf } from 'styled-system';

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
              <View key={i} style={styles.listItem}>
                <Text style={styles.textContent}>{item}</Text>
                <Text style={styles.listIcon}>0.0.0</Text>
              </View>
            ) 
          }
          return(
              <View key={i} style={styles.listItem}>
                <Text style={styles.textContent}>{item}</Text>
                <Ionicons name="chevron-forward-outline" style={styles.listIcon} size={25}/>
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
  listItem:{
    backgroundColor:'white',
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor:'#f0f5ff',
    borderBottomWidth: 2,
    paddingVertical:24
  },
  textContent:{
      marginLeft:"5%",
  },
  listIcon:{
      marginRight:"5%",
      color:"#627fae"
  }
})