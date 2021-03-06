import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Button(props) {
    let ButtonContent = ()=>{
        switch (props.buttonIcon) {
            case "up":
                return (
                    <Pressable style={styles.button} onPress={props.onButtonPress}>
                        <Ionicons name="arrow-down-outline" color="#079efe" size={25}/>
                        <Text style={styles.buttonText}>{props.buttonText}</Text>
                    </Pressable>
                ) 
            case "down":
                return (
                    <Pressable style={styles.button} onPress={props.onButtonPress}>
                        <Ionicons name="arrow-up-outline" color="#079efe" size={25}/>
                        <Text style={styles.buttonText}>{props.buttonText}</Text>
                    </Pressable>
                )
            case "full":
                return (
                    <Pressable style={styles.buttonFull} onPress={props.onButtonPress}>
                        <Text style={styles.buttonFullText}>{props.buttonText}</Text>
                    </Pressable>
                )
            default:
                return (
                    <Pressable style={styles.button} onPress={props.onButtonPress}>
                        <Text style={styles.buttonText}>{props.buttonText}</Text>
                    </Pressable>
                )
        }
    }

    return <ButtonContent/>
}

let styles =StyleSheet.create({
    button:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        marginHorizontal:'2.5%',
        width:"43%",
        backgroundColor: '#f0f5ff',
        borderRadius: 5
    },
    buttonFull:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        // marginVertical:,
        marginBottom:15,
        height:'10%',
        paddingVertical:11,
        width:"90%",
        backgroundColor: '#f0f5ff',
        borderRadius: 5
    },
    buttonText:{
        marginLeft:5,
        textAlign:'center',
        fontSize: 17,
        fontWeight:"500",
        color: '#079efe',    
    },
    buttonFullText:{
        marginLeft:5,
        textAlign:'center',
        fontSize: 14,
        fontWeight:"500",
        color: '#079efe',    }  
})