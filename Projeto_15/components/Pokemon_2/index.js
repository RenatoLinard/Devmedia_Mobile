import React from 'react';
import {View, Text, Image} from 'react-native';
import squirtle from '../../assets/squirtle.png';
import styles from './styles';

export default function Pokemon_2() {
    return (
        <View style={styles.container}>
            <Image source={squirtle} style={styles.img}/>
            <Text style={styles.first_text}>Squirtle</Text>
            <Text> Pokemon tipo agua.</Text>
            
        </View>
    )
};
