import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'

const input = ({label,onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
          <TextInput placeholder={placeholder} onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  )
}

export default input

const styles = StyleSheet.create({
    container:{
     margin:10,
    },
    label:{
        fontSize:15,
        fontWeight:'500',
        marginLeft:5
    },
    input_container:{
        borderWidth:1,
        margin:3,
        padding:3,
        borderRadius:5,
        borderColor:'#DDDDDD',
    }
})