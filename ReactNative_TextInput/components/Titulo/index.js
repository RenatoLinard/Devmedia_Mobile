import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Titulo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt1}> Sorteio Devmedia </Text>
            <Text style={styles.txt2}> Hora de ver quem é o vencedor </Text>
        </View>
    )
}

export default Titulo;
