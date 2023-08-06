import React from "react";
import { ImageBackground, Text } from "react-native";
import background from '../../assets/background_Sinal.jpg';
import styles from "./styles";




export default function Sinal() {
    return(
        <ImageBackground
            source={background}
            style={styles.container} 
            blurRadius={1}
        >
            
            <Text style={styles.texto}>
                Pelo Sinal da santa cruz, livrai-nos Deus Nosso Senhor 
                dos nossos inimigos. Em nome do Pai
                , do Filho e do Espírito Santo, Amém.
            </Text>
        </ImageBackground>
    )
};
