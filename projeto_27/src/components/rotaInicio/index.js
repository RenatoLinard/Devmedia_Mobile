import React from "react";
import { ImageBackground, Text, View } from "react-native";
import background from '../../../assets/background.jpg';
import styles from "./styles";




export default function Inicio() {
    return(
        <ImageBackground
            source={background}
            style={styles.container}        
            >

            <View style={styles.box}>
                <Text style={styles.titulo}> Pousada Chalé </Text>
                <Text style={styles.texto}> Um lugar para você e sua familia </Text>
            </View>

        </ImageBackground>
    )
};
