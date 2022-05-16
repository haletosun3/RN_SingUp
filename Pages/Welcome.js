import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../Components/Button/Button'

const Welcome = ({navigation}) => {

  function goToMember() {
    navigation.navigate('Member');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Member App</Text>
      <Button text="Sign in" onPress={goToMember}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  header:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'700',
    margin:10
  }
})

export default Welcome