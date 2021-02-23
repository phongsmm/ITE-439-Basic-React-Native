import React ,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,ActivityIndicator,FlatList,SafeAreaView,TouchableHighlight,Image} from 'react-native'
import axios from 'axios'
import _ from 'lodash'



export default function NewsScreen(props) {

    const [News,setNews] = useState([]);
    const [Load,setLoad] = useState(false);

     useEffect(() => {

         async function getApi(){
            let res = await axios.get('https://newsapi.org/v2/top-headlines?country=th&apiKey=e3fd696e2a5744058590466e18c98e38')
            setNews(res.data.articles)
            setLoad(true)

         }
         getApi()
        

      }, []);

      function _renderItem({item}){


          let urlToImage = item.urlToImage!== null?item.urlToImage:'http://via.placeholder.com/150*100'

          return (        <SafeAreaView style={{flex:1}}>
            <TouchableHighlight
            underlayColor = "white"
            onPress = {()=>{props.navigation.navigate('Web',{url:item.url})}}
            >
                <View style={{flex:1,flexDirection:'row',margin:10}}>
                    <Image resizeMode="cover" source={{uri:urlToImage}} style={{flex:1,width:'100%',height:'100%'}}/>

                    <View style={{width:200,alignSelf:'center',margin:5}}>
                        <Text style={{fontSize:14,marginBottom:5}}>{item.title}</Text>
                    </View>

                </View>

           

            </TouchableHighlight>

        
        </SafeAreaView>
        )
      }


    return (

        
        
        <View style={styles.container}>

            {Load?   <FlatList
            data={News}
            renderItem={_renderItem}
            keyExtractor={(item,index) => index.toString()}
            />:<Text>Loading</Text>}
            
         


      

     

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
    },
    footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
    },
    footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    },
    buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
    },
    });
