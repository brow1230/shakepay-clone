import React from 'react';
import {StyleSheet,  Text, View } from 'react-native';
import { fontWeight } from 'styled-system';

export default function History(props) {
  const pointHistoryArr = [
    {
      title:'Waitlist position is locked in' ,
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
      title:'Entered waitlist' ,
      day:'Jun 15th',
      points:420,
    },
  ] 
  return (
    <View style={styles.pointHistoryContainer}>
      <Text style={styles.pointHistoryTitle}>Points History</Text>
      <View  style={styles.pointHistoryItemList}>
      {
        props.user.pointsHistory.map((event, i) => {
          return(
            <View style={styles.pointHisotyrItem} key={i}>
              <View style={styles.pointHistory}>
                <Text  style={styles.pointHistoryEvent}>{event.title}</Text>
                <Text style={styles.pointHistoryDate}>{event.day}</Text>
              </View> 
              <Text  style={styles.pointHistoryPoints}>+ {event.points}</Text>
            </View>
          )
        })
      }
      </View>
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
  pointHistoryContainer:{
    marginHorizontal:'7%',
    marginVertical: 30,
  },
  pointHistoryTitle:{
    paddingVertical:20,
    fontSize: 22,
    fontWeight:'600',
    },
  pointHistoryItemList:{
    
  },
  pointHisotyrItem:{
    flex:1,
    flexDirection: 'row',
    paddingVertical:10,
  },
  pointHistory:{
    width: '70%',
  },
  pointHistoryEvent:{
    paddingBottom:10,
    fontSize:16,
    fontWeight:'500'
  },
  pointHistoryDate:{
    color:'#627fae',

  },
  pointHistoryPoints:{
    width: '30%',
    textAlign:'right',
    fontSize:16,
    fontWeight:'500'
  },
})