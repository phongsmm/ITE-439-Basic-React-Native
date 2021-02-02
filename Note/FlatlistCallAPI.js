import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  TouchableOpacity,
  FlatList, 
  ActivityIndicator,
  Alert,
  TouchableOpacityBase
} from 'react-native'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      loading :true,
      serverData:[],
      fetching_from_server:false
    };

    this.offset = 1;


  }

  async componentDidMount(){

    try{

      let res = await fetch('https://aboutreact.herokuapp.com/getpost.php?offset='+this.offset)
      let json = await res.json()
      this.offset = await this.offset+1
  
      this.setState({serverData : [...this.state.serverData,...json.results],loading:false})

    }
    catch(e){
      console.log(e)
    }

  }

  componentWillUnmount(){

  }

   loadMoreData = async () =>{

    try{

      const res = await fetch('https://aboutreact.herokuapp.com/getpost.php?offset='+this.offset)
      const json = await res.json()
      this.offset = await this.offset+1
  
      this.setState({serverData:[...this.state.serverData,...json.results],loading:false})

    }
    catch(e){
      console.log(e)
    }


  }

  renderFooter(){
    return(
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity = {0.9} onPress = {this.loadMoreData} style={styles.loadMoreBtn}>
            <Text style={styles.btnText}>
                LoadMore
            </Text>
            {this.state.fetching_from_server?(<ActivityIndicator color='white' style={{marginLeft:10}}/>):null}
        </TouchableOpacity>


      </View>

    )

  }


  render() {
    return (
      <View style={styles.contianner}>

        { this.state.loading?
        (<ActivityIndicator size='large'/>):
        (<FlatList style={{width:'100%'}} 
                   keyExtractor={(item,index)=>index.toString()}
                   data={this.state.serverData} 
                   renderItem={({item,index}) => (
                   <View style={styles.item}> 
                   <Text style={styles.text}> 
                   {item.id} {'.'}{item.title.toUpperCase()}
                   </Text> 
                   </View>)}
                   ItemSeparatorComponent={()=><View style={styles.separator}></View>}
                   ListFooterComponent={this.renderFooter.bind(this)}/>)}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30
  },
  item:{
    padding:10
  },
  separator:{
    height:0.5,
    backgroundColor:'#000000'
  },
  text:{
    fontSize:15,
    color:'black'

  },
  footer:{
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  loadMoreBtn:{
    padding:10,
    backgroundColor:'red',
    borderRadius:4,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    color:'white',
    fontSize:15,
    textAlign:'center'

  }

})
