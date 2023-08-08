import React from "react";
import { View, Text, Image } from "react-native";
import quarto1 from '../../../assets/quarto1.jpg';
import arealazer from '../../../assets/arealazer.jpg';
import styles from './styles';

export default function Quartos() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Nossos Quartos </Text>
            <Text style={styles.subtitulo}> Veja detalhes sobre nossos quartos </Text>

            <View style={styles.boximg}>
                <Image source={quarto1} style={styles.img}/>
                <Image source={arealazer} style={styles.img}/>
            </View>
            <Text style={styles.subtitulo}> Todos os nossos quartos incluem: </Text>

            <Text style={styles.texto}> -TV tela plana a cabo </Text>
            <Text style={styles.texto}> -Cozinha compacta </Text>
            <Text style={styles.texto}> -Area para refeições </Text>
            <Text style={styles.texto}> -Ar-Condicionado </Text>
        </View>
    )
};
