import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import nintendo from '../assets/nintendo.png';

export default function Topo (){
    return (
        <View style={estilos.container}>
            <Image source={nintendo} style={estilos.img} />

            <Text style={estilos.titulo}>Nintendo Switch</Text>
        </View>
    );
}



const estilos = StyleSheet.create({
    img: {
        width: 392,
        height: 150,
    },

    titulo: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 15,
    },

    container: {
        backgroundColor: '#d52286',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },


})



