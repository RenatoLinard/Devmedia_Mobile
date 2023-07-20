import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import anthony from './assets/anthony.jpg'
import sayo from './assets/sayo.jpg'
import renato from './assets/renato.jpg'


export default function App() {
    return(
        <View style={estilos.container}>
            <View style={estilos.card}>
                <Text style={estilos.funcao}>Mobile Developer</Text>
                <Text style={estilos.nome}>Renato Linard</Text>
                <Image source= {renato} style={estilos.img}/>
            </View>    
            
            <View style={estilos.card}>
                <Text style={estilos.funcao}>FullStack Developer</Text>
                <Text style={estilos.nome}>Sayonara Sousa</Text>
                <Image source= {sayo} style={estilos.img}/>
            </View>    
            
            <View style={estilos.card}>
                <Text style={estilos.funcao}>Frontend Developer</Text>
                <Text style={estilos.nome}>Anthony Linard</Text>
                <Image source= {anthony} style={estilos.img}/>
            </View>    

        </View> 
    );
}



const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    img: {
        width: 70,
        height:70,
        borderColor:'black',
        borderWidth: 1,
        borderRadius: 35,
        marginTop:10,
    },

    card: {
        backgroundColor: 'blue',
        height: 170,
        padding: 20,
        width: 350,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom:20,
    },

    funcao: {
        marginBottom:10,
        fontSize: 20,
        color: 'white'
    },

    nome: {
        fontSize:13,
        color: 'white',
    },
});
