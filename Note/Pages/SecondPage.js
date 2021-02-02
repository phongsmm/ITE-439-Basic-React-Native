import React , {useState} from 'react'
import { StyleSheet, Text, View ,Button,TextInput, SafeAreaView} from 'react-native'
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';



export default function SecondPage({route}) {

    const { name } = route.params;

    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
      });
    
      
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={styles.container}>
              <Text style={styles.heading}>
                    Thai-Nichi 
                    Institute of Technology 
              </Text>
              <Text style={styles.textStyle}> Values passed from First page : {name} </Text>
   
              
          </View>
        

      </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',

    },
    heading:{
        fontSize:25,
        textAlign:'center',
        marginVertical:20
        ,fontFamily:'Kanit_400Regular'
        ,marginHorizontal:10

    },
    textStyle:{
        color:'#222831',
        fontSize:16,
        textAlign:'center',
        marginVertical:10,
        fontFamily:'Kanit_400Regular'
        ,marginHorizontal:10

    },
    inputstyle:{
        width:'80%',
        height:44,
        padding:10
        ,backgroundColor:'#d4e2d4'
        ,fontFamily:'Kanit_400Regular'


    }
})
