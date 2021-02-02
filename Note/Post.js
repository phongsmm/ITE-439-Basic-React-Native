import React  from 'react'
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

let Stack = createStackNavigator();

export default function App() {




  function HomeScreen({ navigation , route }) {

    React.useEffect(()=>{
      if(route.params?.post){

        
      }
  
    },[route.params?.post])
  

   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="CREATE POST 📃"
          color="#6f9eaf"
          onPress={() => {
            
            navigation.navigate('Posts');
          }}
        />
        <Text style={{marginTop:10}}>Post : {route.params?.post}</Text>
        
      </View>
    );
  }
  
  function CreatePost({navigation }) {

    const [post,setPost] = React.useState("")

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput multiline style={styles.TextInput} value={post} onChangeText={(x)=>{setPost(x)}}/>

      <View style={{marginVertical:20,width:'80%'}}>
      <Button color="#9dab86" title="DONE ✅" onPress={() => navigation.navigate('Home',{post:post})} />
      </View>
        
      </View>
    );
  }

  

  return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Posts" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  containner:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  TextInput:{width:'80%',height:200,backgroundColor:'#f5f4f4' , borderColor:'#dddddd' ,borderWidth:3,padding:20}
})
