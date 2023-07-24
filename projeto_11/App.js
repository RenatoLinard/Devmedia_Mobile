import React from 'react';
import {View, StyleSheet} from 'react-native';
import Topo from './Components/topo/index';
import Conteudo from './Components/conteudo/index';

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
