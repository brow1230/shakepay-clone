import React from 'react';
import {StyleSheet,  Text, View, ScrollView, RefreshControl } from 'react-native';
import CoinListItem from '../components/CoinListItem'
import Button from '../components/Button'

export default function HomeScreen(){
  
  // refresh 
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);


  return (
          <View style={styles.parentView}>
            <View style={styles.boxStyle}>
              <Text style={styles.dollarAmountText} >  $1.88 </Text>
                <View style={styles.fundsButtonGroup}>
                  <Button buttonText="Add funds" buttonIcon="up" />
                  <Button buttonText="Send" buttonIcon="down"/>
                </View>
            </View>
            <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <CoinListItem/>
        </ScrollView>
            
          </View>
  )};

  const styles = StyleSheet.create({
    boxStyle: {
      width:'100%',
      paddingBottom:15,
      justifyContent:'center',
      backgroundColor:'white',
      alignItems:'center',
      borderBottomColor:'#f0f5ff',
      borderBottomWidth: 2,
    },
    dollarAmountText:{
      fontSize:36,
      textAlign:'center',
      paddingVertical:25
    },
    fundsButtonGroup:{
      flexDirection:'row',
      justifyContent:"space-between",
      paddingTop:25
    },
    parentView:{
      backgroundColor: 'white',
      height:'100%'
    
    },
  })