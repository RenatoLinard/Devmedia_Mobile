import React from "react";
import { ImageBackground, Text, ScrollView } from "react-native";
import background from '../../assets/background_Sinal.jpg';
import styles from "./styles";




export default function Creio() {
    return(
        <ImageBackground
            source={background}
            style={styles.container} 
            blurRadius={1}
        >
            <ScrollView>            
            <Text style={styles.texto}>
                Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra,
                creio em Jesus Cristo, seu único filho, Nosso Senhor, que foi
                concebido pelo poder do Espírito Santo, nasceu da Virgem Maria,
                padeceu sob Pôncio Pilatos, foi crucificado morto e sepultado,
                 desceu à mansão dos mortos, ressuscitou ao terceiro, dia subiu
                aos céus, está sentado à direita de Deus Pai, todo poderoso,
                de onde a de vir a julgar os vivos e os mortos. Creio no
                Espírito Santo, na Santa Igreja Católica, na comunhão dos
                Santos, na remissão dos pecados, na ressurreição da carne,
                na vida eterna. Amém.
            </Text>

            </ScrollView>
        </ImageBackground>
    )
};

