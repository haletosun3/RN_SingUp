import { StyleSheet, Text, View,SafeAreaView ,Alert } from 'react-native'
import React, { useState } from 'react'

import Input from '../Components/Input/Input'
import Button from '../Components/Button/Button'


const MemberSign = ({navigation}) => {

  function handleSubmit(){
    if ( !username || !userSurname || !userMail){
      Alert.alert('Empty','Dont empty');
    }
    const user={
      username:username,
      surname:userSurname,
      userMail:userMail
    };
   // navigation.navigate('MemberResult',{});
  }

  const [username, setUsername] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userMail, setUserMail] = useState(null);

  return (
   <SafeAreaView>
       <Input 
       label="Name" 
       placeholder="Name.." 
       onChangeText={setUsername} />

       <Input 
       label="Surname" 
       placeholder="Surname.."
       onChangeText={setUserSurname} />

       <Input 
       label="E-mail" 
       placeholder="E-mail.." 
       onChangeText={setUserMail}/>

       <Button text="Register" onPress={handleSubmit()}/>
   </SafeAreaView>
  )
}

export default MemberSign

const styles = StyleSheet.create({})