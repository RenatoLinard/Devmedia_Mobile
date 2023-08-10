import React from "react";
import { View, Image } from "react-native";
import gato from '../../assets/gato.png';
import styles from "./styles";

export default function Gato() {
    return(
        <View style={styles.container}>
            <Image source={gato} style={styles.img}/>
        </View>
    )
};
