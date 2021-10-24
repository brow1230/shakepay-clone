import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native';

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
    <View> 
      {props.user.verificationsCompleted.map((item, i) =>{
          console.log(i)
          let textContent = getFieldInfo(item.verificationItem)
          if(item.verificationComplete === false){
            return(
              <View>
                <Ionicons name="remove-circle" color="#f6d070"/>
                <Text>{textContent}</Text>
              </View>
            )
          }else{
            return(
              <View>
                <Ionicons name="checkmark-circle" color="#079efe"/>
                <Text>{textContent}</Text>
              </View>
            )
          }
        })
      }
    </View>
  )
}