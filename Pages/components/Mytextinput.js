import React from 'react'
import { TextInput, Text, View } from 'react-native'
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'
export default function Mytextinput(props) {

    let [loadfont] = useFonts({Kanit_400Regular})
    
    return (
        <View
        style={{
          marginLeft: 35,
          marginRight: 35,
          marginTop: 10,
          borderColor: '#007FFF',
          borderWidth: 1,
        }}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder={props.placeholder}
          placeholderTextColor="#007FFF"
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          returnKeyType={props.returnKeyType}
          numberOfLines={props.numberOfLines}
          multiline={props.multiline}
          onSubmitEditing={props.onSubmitEditing}
          style={props.style,{fontFamily:'Kanit_400Regular'}}
          blurOnSubmit={false}
          value={props.value}
        />
      </View>
    )
}

