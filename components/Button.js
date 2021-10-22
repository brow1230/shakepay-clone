import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Button(props) {
    let ButtonContent = ()=>{
        if(props.buttonIcon === "up"){
            return (
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="arrow-down-outline" color="#079efe" size='25'/>
                    <Text style={styles.buttonText}>{props.buttonText}</Text>
                </TouchableOpacity>
            )

        }else if (props.buttonIcon === "down") {
            return (
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="arrow-up-outline" color="#079efe" size='25'/>
                    <Text style={styles.buttonText}>{props.buttonText}</Text>
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{props.buttonText}</Text>
                </TouchableOpacity>
            )
        }
    }

    return(
     
    <ButtonContent/>)
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
    buttonText:{
        marginLeft:5,
        textAlign:'center',
        fontSize: 17,
        fontWeight:"500",
        color: '#079efe',    } 
})