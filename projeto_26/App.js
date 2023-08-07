import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
    return(
        <View style={styles.container}>

            <View style={styles.bottom}>
            <Text style={styles.texto}> Home </Text>
            <AntDesign name="home" size={24} color="white" /> 
            </View>
        
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },

    bottom: {
        width: 100,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    texto: {
        fontSize: 15,
        color: 'white',
    }
});
