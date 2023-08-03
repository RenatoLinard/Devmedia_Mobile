import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import cardGastly from '../../assets/cardGastly.png';
import fotoGastly from '../../assets/fotoGastly.jpg';


export default function Gastly(props) {
    return(
        <View style={styles.container}>
            <Image source={cardGastly} style={styles.img}/>
            <Image source={fotoGastly} style={styles.img2}/>
        </View>
    )
};
