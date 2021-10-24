import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, StyleSheet} from 'react-native';
import { marginLeft } from 'styled-system';

export default function VerificationStatus (props) {
    function getFieldInfo(field) {
      switch (field) {
        case "email":
        return props.user.emailAdress

        case "phoneNumber":
        return props.user.phoneNumber

        case "account":
        return "Account";
        
        default:
          break;
      }
    }
  return(
    <View style={styles.verificationView}> 
      {props.user.verificationsCompleted.map((item, i) =>{
          console.log(i)
          let textContent = getFieldInfo(item.verificationItem)
          if(item.verificationComplete === false){
            return(
              <View style={styles.verificationItem} key={i}>
                <Ionicons name="remove-circle" color="#f6d070" size={25}/>
                <Text style={styles.verificationText} >{textContent}</Text>
              </View>
            )
          }else{
            return(
              <View style={styles.verificationItem} key={i}>
                <Ionicons name="checkmark-circle" color="#079efe" size={25}/>
                <Text style={styles.verificationText}>{textContent}</Text>
              </View>
            )
          }
        })
      }
    </View>
  )
}

let styles = StyleSheet.create({
    verificationView: {
        
    },
    verificationItem: {
        flex:1,
        flexDirection: 'row',
        paddingVertical:5
    },
    verificationText: {
        textAlign:'center',
        alignSelf:'center',
        marginLeft:5,
        fontSize:16
    },
})