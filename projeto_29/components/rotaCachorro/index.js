
import React from "react";
import { View, Image } from "react-native";
import cachorro from '../../assets/cachorro.png';
import styles from "./styles";

export default function Cachorro() {
    return(
        <View style={styles.container}>
            <Image source={cachorro} style={styles.img}/>
        </View>
    )
};
