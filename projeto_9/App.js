import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import lua from './assets/lua.png';



export default function App() {
    return(
        <View style={estilos.container}>
            <Image source={lua} style={estilos.img} />

            <View style={estilos.card}>
                <Text style={estilos.titulo}> Lua </Text>
                 <Text style={estilos.descrição}>A lua é o satelite natural do  
                    <Text style={{fontWeight: 'bold',
                                 fontStyle: 'italic',
                                fontSize: 22,
                    }}> planeta terra</Text> ,
                       distanciados por aproximadamente 384.405km. </Text>
            </View>
        </View>
    );
}



const estilos = StyleSheet.create({
    
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 200,
        height: 200,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 100,
        marginBottom: 60,
    },

    card: {
        backgroundColor: 'black',
        width: 350,
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'dotted',
        padding: 20,
        alignItems: 'center',
    },

    titulo: {
        fontSize: 40,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        
    },

    descrição: {
        color: 'white',
        fontSize: 19,
        marginTop: 20,
    },
})
