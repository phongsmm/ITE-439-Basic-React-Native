import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity,Image,SafeAreaView,Text } from 'react-native'

import { createDrawerNavigator,  
   DrawerContentScrollView,
  DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {useFonts , Kanit_400Regular } from '@expo-google-fonts/kanit'

import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import LandingPage from './Pages/LandingPage'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const NavigationDrawerStructor = (props) =>{
  const toggleDrawer = ()=> {
    props.nav.toggleDrawer();
    

  }

  return(<View style={styles.containner, {flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>toggleDrawer()}>
    <Image source ={require('./images/drawerWhite.png')} style={{width:25,height:25,marginLeft:5}}/>
    </TouchableOpacity>
    

    
  </View>)
}







function FirstStack({navigation,route}){
  return(
    <Stack.Navigator initialRouteName="FirstPage">
  <Stack.Screen name = "FirstPage" component={FirstPage}
    initialParams={route.params}
    options={{
    title:"First Page",
    headerLeft: ()=> <NavigationDrawerStructor nav={navigation}/> ,
    headerStyle:{backgroundColor:'#6a492b'},
    headerTintColor:'#dddddd',
    headerTitleStyle:{fontWeight:'bold' , fontFamily :'Kanit_400Regular'}


  }}/>
 
          
          </Stack.Navigator>
  );
}


function SecondStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="SecondPage">
  <Stack.Screen name = "SecondPage" component={SecondPage} options={{
    title:"Second Page",
    headerLeft: ()=> <NavigationDrawerStructor nav={navigation}/>,
    headerStyle:{backgroundColor:'#6a492b'},
    headerTintColor:'#dddddd',
    headerTitleStyle:{fontWeight:'bold' , fontFamily :'Kanit_400Regular'}


  }}/>
 
          
          </Stack.Navigator>
  );
}



function ThirdStack({navigation}){
  return(
    <Stack.Navigator initialRouteName="ThirdPage">
  <Stack.Screen name = "ThirdPage" component={ThirdPage} options={{
    title:"Third Page",
    headerLeft: ()=> <NavigationDrawerStructor nav={navigation}/> ,
    headerStyle:{backgroundColor:'#6a492b'},
    headerTintColor:'#dddddd',
    headerTitleStyle:{fontWeight:'bold' , fontFamily :'Kanit_400Regular'}


  }}/>
 
          
          </Stack.Navigator>
  );
}

const drawerStack = ({navigation,route})=>{
  return(
    <Drawer.Navigator drawerContentOptions={{
      activeTintColor:'#e91e63'

    }}

    drawerContent = {(props)=>{
      return (<DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        {route.params.userType==='user'?(
        <DrawerItem label={({color}) => (<Text style={{color}}> Change Access to Guest </Text>)} onPress={()=>navigation.navigate('drawerStack',{userType:'guest'})}></DrawerItem>):null
        }

      </DrawerContentScrollView>)
    }}
    
    >
    {
      route.params.userType === 'user'?(<>
         <Drawer.Screen name="FirstPage" component={FirstStack} options={{drawerLabel:'First Page Option'}} initialParams={{userType:route.params.userType}} />
        <Drawer.Screen name="SecondPage" component={SecondStack }  options={{drawerLabel:'Second Page Option'}}/>
        <Drawer.Screen name="ThirdPage" component={ThirdStack}  options={{drawerLabel:'Third Page Option'}}/>
        </>) : null }

        {
      route.params.userType === 'guest'?(<>
         <Drawer.Screen name="FirstPage" component={FirstStack} options={{drawerLabel:'First Page Option'}} initialParams={{userType:route.params.userType}}  />
        </>) : null }

    </Drawer.Navigator>
  )
  
}


export default function App () {

  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });



    return (
      <View style={{flex:1}}>

<NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name = "LandingPage" component={LandingPage}/>
            <Stack.Screen name = "drawerStack" component={drawerStack}/>
          </Stack.Navigator>

          </NavigationContainer>
 
      </View>
    )
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
