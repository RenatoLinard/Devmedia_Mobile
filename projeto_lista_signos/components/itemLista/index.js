import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";


export default function ItemLista(props) {
    return(
        <View style={styles.boxSigno}>
            <Text style={styles.nomeSigno}>
                {props.signo}
            </Text>

            <Text>
                Nascidos entre: {props.dataInicio} - {props.dataFim}
            </Text>

        </View>
    )
};
