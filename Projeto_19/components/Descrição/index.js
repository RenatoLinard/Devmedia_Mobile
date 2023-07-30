import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";



export default function Descrição(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Voltando para o Home </Text>

            <Text style={styles.texto}> Toque na seta ao lado do titulo 
                da rota para voltar para home </Text>
        </View>
    )
};
