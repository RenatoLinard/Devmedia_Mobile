import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import steve from './assets/steve.jpg';



export default function App() {
    return (
        <View style={estilos.container}>
            <Image source={steve} style={estilos.img}/>

            <Text style={estilos.tilulo}>Uma Breve Historia do Tempo</Text>

            <Text style={estilos.descrição}>Marco definitivo da literatura de divulgação
                cientifíca. Uma breve historia do tempo é relançado em edição
                revista e atualizada</Text>

            <Text style={estilos.citação}> "Uma obra magistral." The Wall Street Journal</Text>
            <Text style={estilos.citação}>"Uma breve história do tempo é a união do entusiasmo de uma
                criança ao intelecto de um gênio." The Sunday Times</Text>

        </View>
    );
}



const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 350,
        height: 350,
    },

    tilulo: {
        marginTop: 20,
        fontSize: 30,
        marginBottom: 20,

    },

    descrição: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    citação: {
        marginTop: 20,
        marginBottom: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    }, 
        
});
