import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ViewUser from './Pages/ViewUser'
import ViewAllUser from './Pages/ViewAllUser'
import DeleteUser from './Pages/DeleteUser'
import UpdateUser from './Pages/UpdateUser'
import HomeScreen from './Pages/HomeScreen'
import RegisterUser from './Pages/RegisterUser'
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', 
          headerStyle: {
            backgroundColor: '#91684a', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
      <Stack.Screen
        name="View"
        component={ViewUser}
        options={{
          title: 'View User', 
          headerStyle: {
            backgroundColor: '#91684a', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
      <Stack.Screen
        name="ViewAll"
        component={ViewAllUser}
        options={{
          title: 'View Users', 
          headerStyle: {
            backgroundColor: '#91684a', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
      <Stack.Screen
        name="Update"
        component={UpdateUser}
        options={{
          title: 'Update User', 
          headerStyle: {
            backgroundColor: '#91684a', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterUser}
        options={{
          title: 'Register User', 
          headerStyle: {
            backgroundColor: '#91684a', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
      <Stack.Screen
        name="Delete"
        component={DeleteUser}
        options={{
          title: 'Delete User',
          headerStyle: {
            backgroundColor: '#91684a', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
