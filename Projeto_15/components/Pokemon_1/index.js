import React from 'react';
import {View, Text, Image} from 'react-native';
import bulbassauro from '../../assets/bubalsauro.png';
import styles from './styles';

export default function Pokemon_1() {
    return (
        <View style={styles.container}>
            <Image source={bulbassauro} style={styles.img}/>
            <Text style={styles.first_text}>Bulbassauro</Text>
            <Text> Pokemon tipo planta e venenoso</Text>
            
        </View>
    )
};
