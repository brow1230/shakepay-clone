import React, { useState, useEffect } from 'react';
import {SafeAreaView, View,ScrollView, Text, StyleSheet} from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons'
import { borderWidth, fontWeight, height, justifyContent } from 'styled-system';
import DownDash from '../assets/down-dash.svg'


export default function ViewCoin() {
    // console.log(route.params)
      // We can access navigation object via context
    const CurrentBalance = () => {
        return(
            <View style={styles.currentBalance}>
                
                <View style={styles.cbGroup}>
                    <View style={styles.cbTextGroup}>
                        <Text style={styles.cbBalText}>Balance</Text>
                        <Text style={styles.cbCadText}>In CAD</Text>
                    </View>
                    <View style={styles.cbAmountGroup}>
                        <Text style={styles.cbAmountCrypto}>0.00</Text>
                        <Text style={styles.cbAmountDollar}>0.00</Text>
                    </View>
                </View>
                
                <View style={styles.cbButtonGroup}>
                    <Button buttonText="Recieve" buttonIcon="up" a/>
                    <Button buttonText="Send" buttonIcon="down" a/>
                </View>
            </View>
        )
    }

    const PreviousTransactions = () => {
        let transactions = [
            {
                title: "@shakingsats",
                time: "12 hours ago",
                amount: 0.00000405,
                in: true
                // title: "in"
            },
            {
                title: "Sold Bitcoin",
                time: "12 hours ago",
                amount: 0.000009,
                in: false
                // title: "in"
            },
            {
                title: "@Shakingsats",
                time: "a day ago",
                amount: 0.00000405,
                in: true
                // title: "in"
            },
            {
                title: "@Shakingsats",
                time: "Friday",
                amount: 0.00000405,
                in: true
                // title: "in"
            },
            {
                title: "@Shakingsats",
                time: "Thursday",
                amount: 0.00000405,
                in: true
                // title: "in"
            },
            {
                title: "@Shakingsats",
                time: "Wednesday",
                amount: 0.00000405,
                in: true
            },
        ]
        return (
            <View  style={styles.transactions}>
                <Text style={styles.trTitle}>Transactions</Text>
                {
                    transactions.map((transaction,i) => {
                        return (
                        <View key={i} style={styles.trItem}>
                            {/* <Ionicons name={transaction.icon}/> */}
                            <DownDash width={20} height={20} marginRight={5}/>

                            <View style={styles.trIInfo}>
                                <View style={styles.trITextGroup}>
                                    <Text style={styles.trITitle}>{transaction.title}</Text>
                                    <Text style={styles.trITime}>{transaction.time}</Text>
                                </View>
                                {
                                    transaction.in 
                                        ? <Text style={styles.trIAmountIn}>{transaction.amount}</Text>
                                        : <Text style={styles.trIAmountOut}>-{transaction.amount}</Text>
                                }
                            </View>
                        </View>
                        )
                    })
                }
            </View>
        )
    }

    const PriceGraph = () => {
        return (
            <View style={styles.priceGraph}>
                <Text style={styles.pgText}>Current Price</Text>
                <Text style={styles.pgPrice}>$75,534.32</Text>
                <View style={styles.pgBox}></View>
            </View>
        )
    }
    return ( 
        <ScrollView height="100%" backgroundColor="white">
            <PriceGraph/>
            <CurrentBalance/>
            <PreviousTransactions/>
        </ScrollView>
    );
  }

// Colors used
// Light Blue: #f0f5ff
// Other Blue: #079efe
// Grey: #627fae


//  GREY BORDER SEPERATOR
//    borderBottomColor:'#f0f5ff',
//    borderBottomWidth: 2,


let styles = StyleSheet.create({
    priceGraph:{
        borderBottomColor:'#f0f5ff',
        borderBottomWidth: 2,
    },
    pgText:{
        marginHorizontal:'2.5%',
        color:'#627fae',
        fontSize:16,
        fontWeight:'500',
        paddingTop:10,

    },
    pgPrice:{
        marginHorizontal:'2.5%',
        fontWeight:'500',
        fontSize:23,
        paddingTop:5,
    },
    pgBox:{
        // marginHorizontal:'2.5%',
        width:'100%',
        height:200,
        // backgroundColor:'red'
    },
    
    currentBalance:{
    // flex:1,
    // flexDirection:'column',
    // height:'20%',
    paddingVertical:5,
    },
    cbGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'2.5%',
        paddingVertical:10

    },
    cbTextGroup:{
    },
    cbBalText:{
        fontSize:20,
        fontWeight:'500',
        paddingBottom:5,
    },
    cbCadText:{
        color:'#627fae',
        fontWeight:'500',
        fontSize:16,
    },
    cbAmountGroup:{
    },
    cbAmountCrypto:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'right',
        paddingBottom:5,
        
    },
    cbAmountDollar:{
        fontSize:16,
        fontWeight:'500',
        textAlign:'right',
        color:'#627fae',

    },
    cbButtonGroup:{
        flexDirection:'row',
        paddingVertical: 10,
        borderBottomColor:'#f0f5ff',
        borderBottomWidth: 2,
    },
    
    transactions:{
         marginHorizontal:'2.5%',
    },
    trTitle:{
        fontSize:20,
        fontWeight:'500',
        paddingVertical:15,

    },
    trItem:{
        paddingVertical:10,
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    trIInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '90%',
        // borderWidth:1,    
        borderColor:'black'
    },
    trITextGroup:{
        // alignSelf:'flex-start'
    },
    trITitle:{
        paddingBottom:5,
        fontSize:15,
        fontWeight:'500'
    },
    trITime:{
        color:'#627fae',
        fontSize:13,
    },
    trIAmountIn:{
        fontSize:15,
        fontWeight:'500',
        color:'green'
    },
    trIAmountOut:{
        fontSize:15,
    },
})