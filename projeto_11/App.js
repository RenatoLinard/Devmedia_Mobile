import React from 'react';
import {View, StyleSheet} from 'react-native';
import Topo from './Components/Topo';
import Conteudo from './Components/Conteudo';

export default function App() {
    return (
        <View style={estilos.container}>
            <Topo/> 
            <Conteudo/>
        </View>
    );
}



const estilos = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        
    },      
})
