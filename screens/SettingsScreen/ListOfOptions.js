import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Image, TextInput, Pressable, Alert } from 'react-native';
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
    const CreateAlert = () =>
    Alert.alert(
      "Fakepay",
      "This isn't Shakepay. This is intended to be a demo only",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
      <View>
        {list.map((item, i) => {
          if(item === "App Version"){
            return(
              <Pressable key={i} style={styles.listItem} onPress={()=>CreateAlert()}>
                <Text style={styles.textContent}>{item}</Text>
                <Text style={styles.listIcon}>0.0.0</Text>
              </Pressable>
            ) 
          }
          return(
              <Pressable key={i} style={styles.listItem} onPress={()=>CreateAlert()}>
                <Text style={styles.textContent}>{item}</Text>
                <Ionicons name="chevron-forward-outline" style={styles.listIcon} size={25}/>
              </Pressable>
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