import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import cardEevee from '../../assets/cardEevee.png';
import fotoEevee from '../../assets/fotoEevee.jpg';


export default function Eevee(props) {
    return(
        <View style={styles.container}>
            <Image source={cardEevee} style={styles.img}/>
            <Image source={fotoEevee} style={styles.img2}/>
        </View>
    )
};
