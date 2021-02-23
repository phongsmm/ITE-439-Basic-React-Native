import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,SafeAreaView} from 'react-native'


export default function HomeScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1 , padding:16}}>
                <View style={styles.containner}>
                    <Text style={styles.header}>
                        Your are on Home Screen

                    </Text>

                </View>

                <TouchableOpacity>
                <Text></Text>
                </TouchableOpacity>
               
            </View>
        </SafeAreaView>
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
