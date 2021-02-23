import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity,Image,SafeAreaView,Text } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'

import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

import HomeScreen from './Pages/HomeScreen';
import ProfileScreen from './Pages/ProfileScreen';
import SettingScreen from './Pages/SettingScreen';
import NewsScreen from './Pages/NewsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();







function HomeStack({navigation,route}){
  return(
    <Stack.Navigator initialRouteName="HomeScreen">
  <Stack.Screen name = "HomeScreen" component={HomeScreen}
    initialParams={route.params}/>
 
          </Stack.Navigator>
  );
}


function ProfileStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="ProfileScreen">
  <Stack.Screen name = "ProfileScreen" component={ProfileScreen}/>
 
          
          </Stack.Navigator>
  );
}



function SettingStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="SettingScreen">
  <Stack.Screen name = "SettingScreen" component={SettingScreen} options={{title:"Setting Screen"}}/>
 
          
          </Stack.Navigator>
  );
}

function NewsStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="NewsScreen">
  <Stack.Screen name = "NewsScreen" component={NewsScreen} options={{title:"News Screen"}}/>
 
          
          </Stack.Navigator>
  );
}


export default function App () {

  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });



    return (
      <View style={{flex:1}}>
          <NavigationContainer>

          <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name = "Home" component={HomeStack} options={{ tabBarLabel:"Home",tabBarIcon:({focused,color,size=10})=>(<Icon name ="planet"/>)}}/>
            <Tab.Screen name = "Profile" component={ProfileStack}/>
            <Tab.Screen name = "Setting" component={SettingStack}/>
            <Tab.Screen name = "News" component={NewsStack}/>
          </Tab.Navigator>

          </NavigationContainer>


 
      </View>
    )
}

const styles = StyleSheet.create({
  containner:{
    flex:1,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'Kanit_400Regular'
  },

  header:{
    fontSize:20,
    textAlign:'center',

  }
  ,
  iconContaniner:{
    marginTop:20,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  }
})
