import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import cardBulbassauro from '../../assets/cardBulbassauro.png';
import fotobulba from '../../assets/fotoBulbassauro.jpg';
export default function Bulbassauro(props) {
    return(
        <View style={styles.container}>
            <Image source={cardBulbassauro} style={styles.img}/>
            <Image source={fotobulba} style={styles.img2}/>
        </View>
    )
};
