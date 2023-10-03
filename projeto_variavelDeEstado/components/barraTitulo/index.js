import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";



const BarraTitulo = () => (
        <View>
            <View style={styles.barraTitulo}>

                <Text style={styles.txt1}>
                     Sorteio DevMedia
                </Text>

                <Text style={styles.txt2}>
                     Hora de ver que é o vencedor
                </Text>

            </View>
        </View>
)

export default BarraTitulo;
