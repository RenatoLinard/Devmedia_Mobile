import React from "react";
import { Button, View, Text } from "react-native";
import styles from "../styles";



export default function TelaSobre(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Toque no botão para abrir a  Tela Inicial
            </Text>
            <View style={styles.boxBottom}>
                <Button title="Tela Inicial" 
                    onPress={() => {props.navigation.navigate('Tela Inicial')
                 }}/>
            </View>
        </View>
    )
};
