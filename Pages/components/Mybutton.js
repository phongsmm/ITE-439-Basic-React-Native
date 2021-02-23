import React from 'react'
import { TouchableOpacity ,StyleSheet,Text} from 'react-native'
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

export default function MyButton(props) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
      });





    return (
        <TouchableOpacity style={Styles.button} onPress={props.customClick}> 
        <Text style={{color:'#f7f7e8'}}> {props.title} </Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:'#91684a',
        color:'#000',
        padding:10,
        marginTop:20,
        marginLeft:35,
        marginRight:35,
        fontFamily:'Kanit_400Regular'
    },

})
