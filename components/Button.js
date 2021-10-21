import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, } from 'react-native';

export default function Button(props) {
    return(
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
    )
}

let styles =StyleSheet.create({
    button:{
        paddingVertical:15,
        marginHorizontal:'2.5%',
        width:"43%",
        backgroundColor: '#f0f5ff',
        borderRadius: 5
    },
    buttonText:{
        textAlign:'center',
        color: '#079efe',    } 
})