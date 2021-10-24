import React from 'react';
import {StyleSheet,  Text, View, ScrollView, Image } from 'react-native';
import CardInformation from '../components/CardInformation';
import History from './History';


export default function CardScreen() {
  let user = {
    username: 'username',
    name: 'notsuperpopular',
    waitlistPosition: 70977,
    pointsEarned: 854,
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
      }]
  }
  return (
    <ScrollView style={styles.parentView}>

    <Text style={styles.pageTitle}>Shakepay Card</Text>
    <Text style={styles.pageSubTitle}>Spend dollars, earn bitcoin</Text>
    <Image style={styles.cardIamge}></Image>
    <Text style={styles.userGreeting}>Hi @{user.name} 🏓</Text>

    <View style={styles.waitlistGroup}>
      <View style={styles.waitlistPoisitionGroup}>
        <Text style={styles.waitlistPoisition}>{Number(user.waitlistPosition).toLocaleString()}</Text>
        <Text style={styles.waitlistPoisitionText}>Waitlist Position</Text>
      </View>
      <View style={styles.pointsGroup}>
        <Text style={styles.points}>{user.pointsEarned}</Text>
        <Text style={styles.pointsText}>Points Earned</Text>
      </View>
    </View>
      <History user={user}/>
      <CardInformation/>
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
  },
  pageTitle:{
    paddingVertical:10,
    paddingTop:25,
    textAlign:'center',
    fontSize:32,
    fontWeight:'800',
    color:'#079efe'
  },
  pageSubTitle:{
    textAlign:'center',
    fontSize:15,
    color:'#627fae'
  },
  cardIamge:{
    width:300,
    height:300
  },
  userGreeting:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'600',
    paddingVertical:30,
    paddingBottom:40,
  },
  waitlistGroup:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    borderBottomColor:'#f0f5ff',
    borderBottomWidth: 2,

  },
  waitlistPoisitionGroup:{
    width:'45%',
    marginHorizontal: '5%',
  },
  waitlistPoisition:{
    fontSize:46,
    fontWeight:'800',
    textAlign:'center',
  },
  waitlistPoisitionText:{
    color:'#627fae',
    paddingVertical:20,
    textAlign:'center',
  },
  pointsGroup:{
    width:'45%',
  },
  points:{
    fontSize:46,
    fontWeight:'800',
    color:'#079efe',
    textAlign:'center',
  },
  pointsText:{
    color:'#627fae',
    paddingVertical:20,
    textAlign:'center',

  },
})