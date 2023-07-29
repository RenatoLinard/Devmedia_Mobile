import React from "react";
import { Button, View, Text } from "react-native";
import estilo from "../styles";



export default function TelaContato(props) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}> Tela de Contato </Text>

            <View style={estilo.buttonBox}>
                <Button title="Tela Inicial" 
                        onPress={() => props.navigation.navigate('Tela Inicial')}/>
            </View>
        </View>

    )
};
