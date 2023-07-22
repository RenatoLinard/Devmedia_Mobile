import React from "react";
import {View, Text,Image, StyleSheet} from 'react-native';
import familia from './assets/familia.jpg'
import renato from './assets/renato.jpg'



export default function App() {
    return(
        <View style={estilos.container}>

           <Image source={familia} style={{width:392, height:450}}/>

            <View style={estilos.boxperfil}>
                <Image source={renato} style={estilos.fotoperfil}/>
                <Text style={estilos.titulo}> Renato Linard </Text>
                <Text style={estilos.descrição}> 
                Formado em Quimica Industrial pela instituição CESFA,
                atuo na area de caldeira há 13 anos. No momento estou
                aprendendo a carreira mobile para um futuro proximo eu possa 
                migrar para a area ou conciliar as duas profissões. </Text>    
            </View> 
        </View>
    );
}



const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },

    fotoperfil: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 75,
    },
    
    titulo: {
        fontSize: 30,
        color: 'black',
        marginBottom: 15,
        marginTop: 15,
    },

    descrição: {
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'center',
    },

    boxperfil: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
});

