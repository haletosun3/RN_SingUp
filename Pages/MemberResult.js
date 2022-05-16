import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'


const MemberResult = ({ route }) => {
    console.log(route);
  return (
    <SafeAreaView>
        <Text>name</Text>
        <Text>SURNAME</Text>
        <Text>E-Mail</Text>
    </SafeAreaView>
  )
}

export default MemberResult

const styles = StyleSheet.create({})