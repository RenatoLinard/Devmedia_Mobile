import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import imgBarratitulo from '../../assets/imgBarratitulo.png';




export default function BarraTitulo() {
    return(
        <View style={styles.container}>
           <Image
            source={imgBarratitulo}
            style={styles.imgBarratitulo}
             />  
        <View>
            <Text style={styles.titulo}>PERSONAL APP TRAINER</Text>
            
            <Text style={styles.subtitulo}> Treino, Dieta e Suplementação </Text>
        </View>

        </View>
    )
};
