import React, { useState } from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

var db = openDatabase({ name: 'dbExample.db' });

export default function ViewUser() {

    let [loadfont] = useFonts({Kanit_400Regular})
    let [inputUserId, setInputUserId] = useState('');
    let [userData, setUserData] = useState({});

    let searchUser = () => {
        setUserData({});
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user where user_id = ?',
            [inputUserId],
            (tx, results) => {
              var len = results.rows.length;
              console.log('len', len);
              if (len > 0) {
                setUserData(results.rows.item(0));
              } else {
                Alert.alert('Warning','User Not Found! 🙄')
              }
            }
          );
        });
      };


    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <Mytextinput
              placeholder="Enter User Id"
              onChangeText={
                (inputUserId) => setInputUserId(inputUserId)
              }
              style={{ padding: 10 }}
            />
            <Mybutton title="Search User" customClick={searchUser} />
            <View
              style={{
                marginLeft: 35,
                marginRight: 35,
                marginTop: 10
                
              }}>
              <Text style={{borderWidth:2,padding:5,marginVertical:5,fontFamily:'Kanit_400Regular',borderColor:'#e3d0b9',fontSize:20}}>UserId : {userData.user_id}</Text>
              <Text style={{borderWidth:2,padding:5,marginVertical:5,fontFamily:'Kanit_400Regular',borderColor:'#e3d0b9',fontSize:20}} >UserName : {userData.user_name}</Text>
              <Text style={{borderWidth:2,padding:5,marginVertical:5,fontFamily:'Kanit_400Regular',borderColor:'#e3d0b9',fontSize:20}} >UserContact : {userData.user_contact}</Text>
              <Text style={{borderWidth:2,padding:5,marginVertical:5,fontFamily:'Kanit_400Regular',borderColor:'#e3d0b9',fontSize:20}} >UserAddress : {userData.user_address}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
}

