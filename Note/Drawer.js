import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert ,Button } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HeaderTitle } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{marginBottom:10 , fontFamily:'Kanit_400Regular'}}> Your in Home Page <Icon name="home" size={30} /></Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{marginBottom:10 , fontFamily:'Kanit_400Regular'}}> Your in Notification Page <Icon name="houzz" size={30} /></Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App () {

  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });



    return (
      <View style={{flex:1}}>
          <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor:'#f8f1f1' }}>
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
      </View>
    )
}

const styles = StyleSheet.create({
  containner:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
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
