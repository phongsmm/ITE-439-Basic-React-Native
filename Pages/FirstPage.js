
import React, { Component , useState} from 'react'
import { Text, View ,Button , StyleSheet ,SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';


export default function FirstPage({ navigation , route}) {
  const [visible,setVisible] = useState(route.params.userType === 'user')

    return (
<SafeAreaView style={{flex:1}}>
    <View style={styles.textcontainner}>
    <Text style={styles.textStyle}>
        Dynamically Set Drawer/Sidebar Options
        {'\n'}
        inReact Navigation Drawer
        {'\n\n'}
        First Page
        </Text>
        <Button title="Go to initial" onPress={()=>navigation.navigate('LandingPage')}/>
        {
          visible?(<Button title="Change Access to  Guest " onPress={()=> { navigation.navigate('drawerStack',{userType:'guest'})
          setVisible(false)} }/>):null
          
        }

    </View>
</SafeAreaView>
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
  
    },
    iconContaniner:{
      marginTop:20,
      marginBottom:20,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center'
    },
    textcontainner:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'

  },
  textStyle:{
      fontSize:18,
      textAlign:'center',
      marginBottom:20,
      fontFamily:'Kanit_400Regular'

  }
  })
  