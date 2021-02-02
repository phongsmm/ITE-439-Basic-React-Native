import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}){
  return (<View style={styles.containner}>  
  <Text> Home Screen </Text>
  <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
  </View>)
}

function DetailsScreen({navigation}){
  return (<View style={styles.containner}>  
    <Text> Detail Screen </Text></View>)
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
