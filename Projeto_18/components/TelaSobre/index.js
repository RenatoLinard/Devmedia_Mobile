import React from "react";
import { Button, View, Text } from "react-native";
import estilo from "../styles";
import TelaHome from "../TelaHome";


export default function TelaSobre(props) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.texto}> Toque no botão abaixo para abrir a tela inicial </Text>
            <View style={estilo.buttonBox}>
                <Button title="Tela Inicial" 
                        onPress={() => {props.navigation.navigate('Tela Inicial')}}/>
            </View>
        </View>
    )
};
