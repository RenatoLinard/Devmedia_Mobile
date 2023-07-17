import React from 'react';
import {View, Text, StyleSheet} from 'react-native';




export default function App() {
    return(
        <View>
            <View style={estilos.barraTitulo}>
                <Text style={estilos.textoBarraTitulo}>Estilizando o aplicativo</Text>
            </View>

            <View style={estilos.container}>
                <Text>
                    aprendendo a pintar o fundo de uma parte da tela
                </Text>
            </View>
        </View>
    );
}


const estilos = StyleSheet.create({
    barraTitulo: {
        height:90,
        backgroundColor: '#7FBF3F',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBarraTitulo: {
        marginTop: 20,
        fontSize: 30,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        
    }
});


