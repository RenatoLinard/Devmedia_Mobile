import React from "react";
import {View, Text} from 'react-native';
import styles from "./styles";



export default function Rotas() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Como Navegar?</Text>
            <Text> Toque nas abas abaixo para navegar entre as telas</Text>
        </View>
    )

};
