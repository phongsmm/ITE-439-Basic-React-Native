import React , { useState } from 'react'
import {   View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Text } from 'react-native'

import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { result } from 'lodash';



var db = openDatabase({ name: 'dbExample.db' });

export default function RegisterUser({ navigation }) {

   
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');
    let len = 0;

    function register_user() {


        let shouldreturn = false
    
        if (!userName) {
          Alert.alert('Warning','Please fill name 😅');
          return;
        }
        if (!userContact) {
            Alert.alert('Warning','Please fill Contact Number 😅');
          return;
        }
        if (!userAddress) {
            Alert.alert('Warning','Please fill Address 😅');
          return;
        }

        db.transaction((tn)=>{
            tn.executeSql(
        
                "SELECT * FROM table_user WHERE user_name= ? ",[userName],
                (tn, results) => {
                    var len = results.rows.length;
                    if (len > 0)
                    {
                        Alert.alert('Warning','This Username Already in Database 🤣')
                        
                    }
                    else{
                        tn.executeSql(
                            'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
                            [userName, userContact, userAddress],
                            (tn, results) => {
                              if (results.rowsAffected > 0) {
                                Alert.alert(
                                  'Success',
                                  'You are Registered Successfully 🤗',
                                  [
                                    {
                                      text: 'Ok',
                                      onPress: () => navigation.navigate('HomeScreen'),
                                    },
                                  ],
                                  { cancelable: false }
                                );
                              } else Alert.alert('Error','Registration Failed 😥');
                            }
                          );
                    }
                }
              );

});




        
    
       
      };
    




    return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter Name"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Contact No"
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Address"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Submit" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
    )
}
