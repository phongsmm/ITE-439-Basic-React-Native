import React, { Component } from 'react'
import { Text, View ,Button , StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';



export default function SecondPage({ navigation }) {
    return (
      <View style={styles.containner}>
         <Text style={{marginBottom:10}}> Your in Second Page <Icon name="houzz" size={30} /></Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
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
  