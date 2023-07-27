import React from "react";
import {View, Text} from 'react-native';
import styles from "./styles";



export default function Telas() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Nome das Telas </Text>
            <Text> Perceba que cada aba representa uma tela do aplicativo</Text>
        </View>
    )

};
