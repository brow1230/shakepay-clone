import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Pressable } from 'react-native';
import { alignContent, alignSelf, flexDirection, justifyContent, style } from 'styled-system';
import ListOfOptions from './SettingsScreen/ListOfOptions';
import VerificationStatus from './SettingsScreen/VerificationStatus';
export default function SettingsScreen() {
  let user = {
    username: 'username',
    name: 'notsuperpopular',
    emailAdress: 'dummyemail@gmail.com',
    phoneNumber: '+17104206969',
    pointsHistory:[{
        title:'Waitlist position is locked in 🏁' ,
        day:'Sep 13th',
        points:420,
      },    {
        title:'#ShakingSats' ,
        day:'Sep 7th',
        points:7,
      },    {
        title:'#ShakingSats' ,
        day:'Sep 4th',
        points:7,
      },    {
        title:'Entered waitlist 🎉' ,
        day:'Jun 15th',
        points:420,
      }],
    verificationsCompleted: [
      {
        verificationItem:"account",
        verificationComplete:false
      },
      {
        verificationItem:"email",
        verificationComplete:true
      },
      {
        verificationItem:"phoneNumber",
        verificationComplete:true
      },
    ],
    interactAnwser: "H3LL0TH3R3",
    signUps:{
      number:1,
      activated:0,
      rewards:0
    }
  }
  return (
    <ScrollView style={styles.parentView}>
      
      <View style={styles.accountView}>
        <Text style={styles.greeting}>Hello <Text style={styles.userName}>@{user.name}</Text>👋</Text>
        <VerificationStatus user={user}/>
      </View> 

      <View style={styles.interactAnwserView}>
        <Text style={styles.interactText}>Interact security awnser: </Text>
          <Pressable style={styles.interactAnwserButton}> 
            <Text style={styles.interactAnwser}>{user.interactAnwser}</Text>
          </Pressable>
      </View>
        
        <View style={styles.referalsView}>
          <Text style={styles.referalsTitle}>My referals</Text>

          <View style={styles.referalsGroupContainer}>
            <View style={styles.referalGroup}>
              <Text style={styles.referalNumber}>{user.signUps.number}</Text>
              <Text style={styles.referalText}>Signups</Text>
            </View>
          
            <View style={styles.referalGroup}>
              <Text style={styles.referalNumber}>{user.signUps.activated}</Text>
              <Text style={styles.referalText}>Activated</Text>
            </View>
          
            <View style={styles.referalGroup}>
              <Text style={styles.referalNumber}>${user.signUps.rewards}</Text>
              <Text style={styles.referalText}>Rewards</Text>
            </View>
          </View>
        </View>


      <ListOfOptions/>

    </ScrollView>
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
  accountView:{
    marginHorizontal:'5%',
    paddingVertical:10,
  },
  greeting:{
    fontSize:20,
    paddingVertical:15,
  },
  userName:{
    fontWeight:'500'
  },
  interactAnwserView:{
    flex:1,
    flexDirection:'row',
    alignContent:'center'
    // justifyContent:
  },
  interactText:{
    // borderWidth:1,
    marginLeft:"5%",
    fontSize:16,
    paddingVertical:10,
  },
  interactAnwser:{
    color:"#079efe",
    fontSize:16,
    fontWeight:'600',
  },
  interactAnwserButton:{
    flex:1,
    alignContent:'center',
    // borderWidth:1,
    marginRight:"5%",
    paddingVertical:10,
    // marginHorizontal:"5%",
    // fontSize:16,
    // paddingVertical:10,
  },
  referalsView:{
    paddingTop:20,
    borderBottomColor:'#f0f5ff',
    borderBottomWidth: 2,
  },
  referalsGroupContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical:30,
  },
  referalsTitle:{
    
    marginHorizontal:"5%",
    fontSize:16
  },
  referalGroup:{
    // flex:1,
    // justifyContent:'center'
    alignContent:'center',
  },
  referalNumber:{
    
    textAlign:'center',
    fontSize:20,
  },
  referalText:{
    textAlign:'center',
    paddingTop:10,
    color:'#627fae'

  },
  
})