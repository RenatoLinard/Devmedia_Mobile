import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import bart from './assets/bart.png'


export default function App() {
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Os Simpsons</Text>

            <Image source={bart} style={estilos.img}/>

            <Text style={estilos.texto}>Bart o filho mais velho</Text>
        </View>
    )
}



const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        color: 'black',
        fontSize: 40,
        marginBottom: 20,
    },

    img: {
        width: 250,
        height: 250,
        marginBottom: 20,
        borderColor:'black',
        borderWidth: 3,
        borderRadius: 125,
    },

    texto: {
        color: 'black',
        fontSize: 25,
    }
});
