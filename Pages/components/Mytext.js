import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

export default function Mytext(props) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
      });


    return <Text style={styles.text}>{props.text}</Text>;
}

const styles = StyleSheet.create({
    text: {
      color: '#111825',
      fontSize: 18,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
      fontFamily:'Kanit_400Regular',
    },
  });
  
