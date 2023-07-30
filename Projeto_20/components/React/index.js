import React from "react";
import { View, Text, Image } from "react-native";
import react from '../../assets/react.png' ;
import styles from "./styles";


export default function TelaReact(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> React </Text>            
            
            <Image source={react} style={styles.img}/>

            <Text style={styles.texto}> React é uma biblioteca JavaScript utilizada no front-end 
                para criar a camada visual de uma aplicação web utilizando 
                JavaScript </Text>
        </View>
    )
};
