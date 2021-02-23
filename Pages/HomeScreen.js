import React , {useEffect,useState} from 'react'
import {  Text, View ,TouchableOpacity,SafeAreaView} from 'react-native'
import Mybutton from './components/Mybutton'
import MyText from './components/Mytext'
import {openDatabase} from 'react-native-sqlite-storage'
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

var db = openDatabase({name:'dbExample.db'})

export default function HomeScreen({navigation}) {

    let [getValue,setValue] = useState()

    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                  []
                );
              }
            }
          );
        });
      }, []);


    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <View style={{ flex: 1 }}>
          <MyText text="SQLite Example" />
          <Mybutton
            title="Register 📜"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Update 📑"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View 🔍"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All 🔍"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete 🔨"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>

      </View>
    </SafeAreaView>
    )
}

