import React from "react";
import { View, Text, Image } from "react-native";
import home from '../../assets/home.png';
import styles from "./styles";

export default function Contato(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Tela de contato
            </Text>

            <View style={styles.viewTouch}
                onTouchStart={() => {props.navigation.navigate('Tela Inicial')}}>
                <Image source={home} style={styles.icon}/>
                <Text style={styles.fontViewTouch}> Tela home </Text>
            </View>
        </View>
    )
};
