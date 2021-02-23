import * as React from 'react'
import { StyleSheet, Text, View , Button , SafeAreaView } from 'react-native'

export default function LandingPage({navigation}) {
    return (
<SafeAreaView style={{flex:1}}>
    <View style={styles.textcontainner}>
    <Text style={styles.textStyle}>
        Dynamically Set Drawer/Sidebar Options
        {'\n'}
        inReact Navigation Drawer
        {'\n\n'}
        Landing LandingPage
        </Text>
        <Button title="Go to Home as Registered User" onPress={()=>navigation.navigate('drawerStack',{userType:'user'})}/>
        <Text style={{textAlign:'center',marginVertical:220}}> 
        ----------------- OR -------------------
        </Text>
        <Button title="Go to Home as Guest" onPress={()=>navigation.navigate('drawerStack',{userType:'guest'})}/>
        

 
    </View>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textcontainner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    textStyle:{
        fontSize:18,
        textAlign:'center',
        marginBottom:20

    }
})
