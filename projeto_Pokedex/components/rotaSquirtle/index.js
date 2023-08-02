import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import cardSquirtle from '../../assets/cardSquirtle.png';
import fotoSquirtle from '../../assets/fotoSquirtle.jpg';


export default function Squirtle(props) {
    return(
        <View style={styles.container}>
            <Image source={cardSquirtle} style={styles.img}/>
            <Image source={fotoSquirtle} style={styles.img2}/>
        </View>
    )
};
