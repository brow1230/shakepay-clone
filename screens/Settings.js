import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
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
  // const VerificationStatus = () => {
  
  return (
    <ScrollView style={styles.parentView}>
      <View>
        <Text>Hello @{user.name}👋</Text>
        <VerificationStatus user={user}/>
      </View> 
      <Text>Interact security awnser: {user.interactAnwser}</Text>
        <View>
          <Text>My referals</Text>
          <View>
            <Text>{user.signUps.number}</Text>
            <Text>Signups</Text>
          </View>
          <View>
            <Text>{user.signUps.activated}</Text>
            <Text>Activated</Text>
          </View>
          <View>
            <Text>${user.signUps.rewards}</Text>
            <Text>Rewards</Text>
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
  
})