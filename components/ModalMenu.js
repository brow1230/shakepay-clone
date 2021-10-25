import React, {useState, useEffect} from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'


export default function ModalMenu (props){
    const CreateAlert = () =>
    Alert.alert(
      "Fakepay",
      "This isn't Shakepay. This is intended to be a demo only",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    if (props.isModalMenuOpen === true ){
      return(
        <Pressable style={styles.modalViewParent} onPress={() => {props.toggleModalMenu(false)}}>
            <View style={styles.modalMenuView}>
              <View style={styles.modalMenuItemView}>
                {
                   props.options.map((item, i) => {
                    if (i ===  props.options.length - 1 ){
                        return (
                            <Pressable key={i} style={styles.modalMenuLastButt} onPress={()=>CreateAlert()}> 
                                <Ionicons name={item.icon} color="#079efe" size={25}/>
                                <View style={styles.textGroup}>
                                    <Text style={styles.modalMenuTitle}>{item.title}</Text>
                                    <Text style={styles.modalMenuText}>{item.description}</Text>
                                </View>
                            </Pressable>
                            )
                    }else {
                        return (
                            <Pressable key={i} style={styles.modalMenuButton} onPress={()=>CreateAlert()}> 
                                <Ionicons name={item.icon} color="#079efe" size={25}/>
                            <View style={styles.textGroup}>
                                <Text style={styles.modalMenuTitle}>{item.title}</Text>
                                <Text style={styles.modalMenuText}>{item.description}</Text>
                            </View>
                            </Pressable>
                            
                        )
                    }
                  })
                }
              </View>
              <Pressable onPress={() => {props.toggleModalMenu(false)}} style={styles.modalMenuCancelButton}> 
                  <Text style={styles.modalMenuCancel}>Cancel</Text>
              </Pressable>
            </View>
        </Pressable>
      )
    }else {
      return <View></View>
    }
  }

// Colors used
// Light Blue: #f0f5ff
// Other Blue: #079efe
// Grey: #627fae


//  GREY BORDER SEPERATOR
//    borderBottomColor:'#f0f5ff',
//    borderBottomWidth: 2,


let styles = StyleSheet.create({
  modalViewParent:{
    position:'absolute',
    top: 0,
    left: 0,
    zIndex:1,
    height: '100%',
    width: '100%',
},
  modalMenuView:{
    backgroundColor:'rgba(35, 76, 102, 0.8)',
    // height: '90%',
    // width: '100%',
    flex:1,
    justifyContent:'flex-end',
    paddingBottom:10,
  },
  modalMenuItemView:{
    marginHorizontal:'2.5%',
    borderRadius:5,
    backgroundColor:'white',
  },
  textGroup:{
    // backgroundColor:'white',
  },
  modalMenuButton:{
    flexDirection:'row',
    borderBottomColor:'#f0f5ff',
    borderBottomWidth:2,
    paddingVertical:10,
    marginLeft:10,
    alignItems: 'center',
},
modalMenuLastButt:{
    flexDirection:'row',
    borderBottomWidth: 0,
    paddingVertical:10,
    marginLeft:10,
    alignItems: 'center',
},
modalMenuTitle:{
    // textAlign:'center',
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
    fontSize:13,
},
modalMenuText:{
    // textAlign:'center',
    marginLeft:10,
    marginBottom:10,
    fontSize:10,
    color:'#627fae'
},
modalMenuCancelButton:{
    backgroundColor:'white',
    marginHorizontal:'2.5%',
    borderBottomWidth: 0,
    borderRadius:5,
    marginTop:10
},
modalMenuCancel:{
    paddingVertical:15,
    textAlign:'center',
},
})

