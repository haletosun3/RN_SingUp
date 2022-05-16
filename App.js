import { View, Text,SafeAreaView , StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './KebapFitnessApp/Pages/Welcome';
import MemberSign from './KebapFitnessApp/Pages/MemberSign';
import MemberResult from './KebapFitnessApp/Pages/MemberResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (  
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >

      <Stack.Screen 
      name='Sing Up' 
      component={Welcome} />

      <Stack.Screen 
      name='Member' 
      component={MemberSign}/>

      <Stack.Screen name='MemberResult'
      component={MemberResult} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App