import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";


export default function Texto() {
    return(
        <View style={styles.box}>
            <Text style={styles.texto}> aluno:</Text>
            <Text style={styles.texto}> idade:</Text>
            <Text style={styles.texto}> Peso:</Text>
            <Text style={styles.texto}> altura:</Text>
            <Text style={styles.texto}> imc:</Text>
            <Text style={styles.texto}> bf:</Text>
        </View>
    )
};
