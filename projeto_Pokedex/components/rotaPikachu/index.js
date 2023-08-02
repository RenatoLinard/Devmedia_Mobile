import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import cardPikachu from '../../assets/cardPikachu.png';
import evoluçãoPikachu from '../../assets/fotopickachu.jpg';

export default function Pikachu(props) {
    return(
        <View style={styles.container}>
           <Image source={cardPikachu} style={styles.img}/>
            
            <Image source={evoluçãoPikachu} style={styles.img2}/>
        </View>
    )
};
