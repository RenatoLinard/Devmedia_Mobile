import React from "react";
import { View } from "react-native";
import styles from "./styles";
import BarraTitulo from "./barraTitulo";
import Cards from "./cards";



export default function Inicial() {
    return(
        <View style={styles.container}>
            <BarraTitulo/>
            <Cards/>
        </View>
    )
};
