
import React from "react";
import { View, Image } from "react-native";
import cardCharmander from '../../assets/fotocharmander.jpg';
import styles from './styles';
import charmander from '../../assets/cardCharmander.png';

export default function Charmander(props) {
    return(
        <View style={styles.container}>

           <Image source={charmander} style={styles.img}/>
           <Image source={cardCharmander} style={styles.img2}/>
        </View>
    )
};
