import React from "../React";
import { View, Text, Image } from "react-native";
import node from '../../assets/node.png'
import styles from "./styles";


export default function Node(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Node.js </Text>

            <Image source={node} style={styles.img}/>

            <Text style={styles.texto}> Node.js é uma ferramenta que permite rodar JavaScript
                no servidor. Com isso voce podera criar seu back-end
                utilizando a linguagem JavaScript </Text>
                
        </View>
    )
};
