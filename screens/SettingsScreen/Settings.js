import React, { useContext } from 'react';
import {StyleSheet,  Text, View, ScrollView, Pressable, Alert } from 'react-native';
import ListOfOptions from './ListOfOptions';
import VerificationStatus from './VerificationStatus';
import {userDataContext} from '../../Context';

export default function SettingsScreen(value) {
    // const userDataContext = useContext(userDataContext)
  let user = value.value.user
  
  const CreateAlert = () =>
    Alert.alert(
      "Fakepay",
      "This isn't Shakepay. This is intended to be a demo only",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <ScrollView style={styles.parentView}>
      
      <View style={styles.accountView}>
        <Text style={styles.greeting}>Hello <Text style={styles.userName}>@{user.name}</Text>👋</Text>
        <VerificationStatus user={user}/>
      </View> 

      <View style={styles.interactAnwserView}>
        <Text style={styles.interactText}>Interact security awnser: </Text>
          <Pressable style={styles.interactAnwserButton} onPress={()=>CreateAlert()}> 
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