import React from "react";
import { View, Image, Text } from "react-native";
import logo from '../../../assets/Personal.png';
import styles from "./styles";

export default function BarraTitulo() {
    return(
        <View style={styles.container}>
            <Image
                source={logo}
                style={styles.img}
            />
            <Text style={styles.texto}>
                A jornada da transformação começa aqui
            </Text>

            <Text style={styles.subtexto}>
                Transforme-se hoje.
            </Text>
        </View>
    )
};
