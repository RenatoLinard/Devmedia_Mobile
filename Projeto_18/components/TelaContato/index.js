import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles";



export default function TelaContato(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                67998811748
            </Text>
            <View style={styles.boxBottom}>
                <Button title="Tela Inicial" 
                    onPress={() => {props.navigation.navigate('Tela Inicial')
                 }}/>
            </View>
        </View>
    )
};
