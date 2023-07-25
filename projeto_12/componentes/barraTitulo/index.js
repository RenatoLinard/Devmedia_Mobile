import React from "react";
import {Text, View} from 'react-native';
import estilo from '../barraTitulo/estilo'



export default function BarraTitulo() {
    return (
        <View style={estilo.container}>
            <Text style={estilo.texto}>   ATOR FAMOSO </Text>
        </View>
    );
}


