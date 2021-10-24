import React, {useState} from 'react';
import {StyleSheet,  Text, View, ScrollView, Image, TextInput } from 'react-native';
import { borderRadius } from 'styled-system';
import Button from '../components/Button';


export default function SendCoinScreen() {
  const [text, onTextChange] = useState("")
  
  return (
    <View style={styles.parentView}>
      
        <TextInput 
          style={styles.search}
          onTextChange={onTextChange}
          placeholder="Send to @shaketag"
        />
        <ScrollView style={styles.resultsContainer}> 
          <Text style={styles.resultsFoundTitle}>NO RESTULTS FOUND</Text>
        </ScrollView>
        <Button buttonIcon="full" buttonText="Enable Phone Contacts"/>
    </View>
    )};

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
  search:{
    width:'90%',
    height:'6%',
    marginHorizontal:'5%',
    marginVertical: 10,
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'#f0f5ff',
    borderRadius:5,
  },
  resultsContainer:{
    height:'80%'
  },
  resultsFoundTitle:{
    marginHorizontal:'5%',
    color:"#627fae",
    paddingVertical:10,
    fontSize:10,
  },
  
})