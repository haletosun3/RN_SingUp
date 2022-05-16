import { View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = ({text,onPress}) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#3655b3',
        borderRadius:5,
        padding:10,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        width:120
    },
    text:{
        color:'white',
        fontWeight:'bold',
       
    }
})