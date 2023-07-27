import React from "react";
import {View, Text} from 'react-native';
import styles from "./styles";



export default function Biblioteca() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Qual biblioteca usamos?</Text>
            <Text> Das bibliotecas que utilizamos podemos destacar duas:</Text>
                    <Text style={styles.texto}>@react-navegation/native</Text>
                    <Text style={styles.texto}>@react-navegation/bottomtabs</Text>
        </View>
    )

};
