import React , {useState} from 'react'
import { StyleSheet, Text, View ,Button,TextInput, SafeAreaView} from 'react-native'
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';




export default function FirstPage({navigation}) {

    const [userName,setuserName] = useState("")
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
              <Text style={styles.textStyle}> Please insert your name to pass it to second screen </Text>
              <TextInput style={styles.inputstyle} placeholder="Enter your name" value={userName} onChangeText={(x)=>setuserName(x)}/>
              <View style={{marginTop:10}}>
              <Button title="GO NEXT" color="#5aa469" onPress={()=>{navigation.navigate('SecondPage',{name:userName})}}/>
              </View>
              
              

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
