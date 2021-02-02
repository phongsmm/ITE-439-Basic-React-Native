import React, { Component } from 'react'
import { Text, StyleSheet, View ,ActivityIndicator,Alert,FlatList,TextInput} from 'react-native'



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      text:'',
      dataSource:[]
    }
    this.arrayholder = [];
    
  }

   async componentDidMount(){
    try{
      
      res = await fetch('https://jsonplaceholder.typicode.com/posts')
      json = await res.json()
      this.setState({isLoading:false,dataSource:json})
      this.arrayholder = json
      
    }
    catch(e){
      console.log(e)
    }

    return json



  }

  SearchFilterFunction(text){
    const newData = this.arrayholder.filter(function(item){

      const itemData = item.title?item.title.toUpperCase():'';
      const textData = text.toUpperCase();
      return itemData.indexOf(textData)>-1;

    })
    this.setState({dataSource:newData , text:text})
  }

  ListViewItemSeparator = ()=>{
    return(<View style={{height:0.3 , width:'90%' , backgroundColor:'#080808'}}></View>)
  }

  render() {
    if(this.state.isLoading){
      return(
      <View style={{flex:1,paddingTop:20}}> 
      <ActivityIndicator/> 
      </View>)
    }
    return (
      <View style={styles.containner}>
        <TextInput style={styles.textInputStyle} onChangeText={text=>this.SearchFilterFunction(text)} 
        value={this.state.text}
        underlineColorAndroid='transparent'
        placeholder="Search Here 😁"/>

        <FlatList 
        keyExtractor={(index,item)=>item.toString()}
        style={{marginTop:10}}
        data={this.state.dataSource} 
        ItemSeparatorComponent={this.ListViewItemSeparator}
        renderItem = {({item})=>(<Text style={styles.textStyle}> {item.title} </Text>)}/>

       
      </View>
    )
  }
}

const styles = StyleSheet.create({

  containner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    padding:16
  },
  textStyle:{padding:10},
  textInputStyle:
  {
   height:40 ,
   borderWidth:1 , 
   paddingLeft:10 , 
   borderColor:'#009688' , 
   backgroundColor:'#FFFFFF'
  }
  
})
