import React from 'react'
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerStyle: {backgroundColor:'#a2d0c1'},headerTintColor:'#eff8ff'}} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{headerStyle: {backgroundColor:'#a2d0c1'},headerTintColor:'#eff8ff'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  containner:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
