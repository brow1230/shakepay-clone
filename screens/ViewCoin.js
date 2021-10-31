import React, { useEffect, useState } from 'react';
import { View,ScrollView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons'
import DownDash from '../assets/down-dash.svg'
import UpDash from '../assets/up-dash.svg'
import SparklineGraph from './HomeScreen/SparklineGraph';


export default function ViewCoin(props) {
    const [priceData, setPriceData] = useState([])

    const getPriceGraphData = async () => {
        console.log('api called')
        let key = 'fe398cd49f6f46c74a6c250fccfbd7bc0856812f'
    let url = `https://api.nomics.com/v1/currencies/sparkline?key=${key}&ids=BTC&start=2020-09-29T00%3A00%3A00Z&convert=CAD`
        try {
            const response = await fetch(url)
            const json = await response.json();
            setPriceData(json)
            console.log(json)
            // console.log(json.data)
           
        } catch (error) {
          console.log("error", error);
        }
      }


    useEffect(() => {
        let mounted = true;
        getPriceGraphData();
        return () => mounted = false;
      }, [])


    console.log(props)
    let wallet = props.route.params.wallet, 
         price = props.route.params.price, 
          held = props.route.params.held 
      // We can access navigation object via context
    const CurrentBalance = () => {
        if (wallet.ticker === 'CAD'){
            return(
                <View style={styles.currentBalance}>
                    
                    <View style={styles.cbGroup}>
                        <View style={styles.cbTextGroup}>
                            <Text style={styles.cbBalText}>Balance</Text>
                        </View>
                        <View style={styles.cbAmountGroup}>
                            <Text style={styles.cbAmountCrypto}>{wallet.amountInWallet}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.cbButtonGroup}>
                        <Button buttonText="Recieve" buttonIcon="up" a/>
                        <Button buttonText="Send" buttonIcon="down" a/>
                    </View>
                </View>
            )
        }
        return(
            <View style={styles.currentBalance}>
                
                <View style={styles.cbGroup}>
                    <View style={styles.cbTextGroup}>
                        <Text style={styles.cbBalText}>Balance</Text>
                        <Text style={styles.cbCadText}>In CAD</Text>
                    </View>
                    <View style={styles.cbAmountGroup}>
                        <Text style={styles.cbAmountCrypto}>{wallet.amountInWallet}</Text>
                        <Text style={styles.cbAmountDollar}>{held}</Text>
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
        let transactions = wallet.transactions
        const CustomIcon = (props) => {
            let type = props.transaction.type
            if (type === 'buy') {
                return <DownDash width={20} height={20} style={styles.trDashIcon}/>
            }else if (type === 'sell') {
                return <Ionicons name="swap-horizontal-outline" size={20} color="#079efe" style={styles.trDashIcon}/>
            }else if (type === 'transferIn') {
                return <DownDash width={20} height={20} style={styles.trDashIcon}/>
            }else if (type === 'transferOut') {
                return <UpDash width={20} height={20} style={styles.trDashIcon}/>                                    
            }else{
                return <></>
                }
            }
        return (
            <View  style={styles.transactions}>
                <Text style={styles.trTitle}>Transactions</Text>
                {
                    transactions.map((transaction,i) => {
                        return (
                            <View key={i} style={styles.trItem}>
                                <CustomIcon transaction={transaction}/> 
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

        
        // function getPriceGraphData () {

        //     let key = 'fe398cd49f6f46c74a6c250fccfbd7bc0856812f'
    
        //     // let url = `https://api.nomics.com/v1/currencies/sparkline?key=${key}&ids=BTC&start=${uriDateString}`
        //     let url = `https://api.nomics.com/v1/currencies/sparkline?key=${key}&ids=BTC&start=2021-09-29T00%3A00%3A00Z&convert=CAD`
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         priceData = json
        //         console.log(priceData)
        //     })
            
        // }
        if (wallet.ticker === 'CAD'){
            return <></>
        }

        return (
            <View style={styles.priceGraph}>
                <Text style={styles.pgText}>Current Price</Text>
                <Text style={styles.pgPrice}>{price}</Text>
                <SparklineGraph style={styles.pgBox} data={priceData}/>
            </View>
        )
    }
    return ( 
        <ScrollView height="100%" backgroundColor="white">
            <PriceGraph/>
            <CurrentBalance/>
            {/* <PreviousTransactions/> */}
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
    },
    trTitle:{
        fontSize:20,
        fontWeight:'500',
        paddingVertical:15,
        marginHorizontal:'2.5%',

    },
    trItem:{
        paddingVertical:10,
        flexDirection:'row',
        marginRight:'2.5%',
        // justifyContent:'space-between'
    },
    trDashIcon:{
        // margin:10,
         margin:'2.5%',

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