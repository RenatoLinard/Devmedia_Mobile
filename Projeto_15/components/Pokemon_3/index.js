
import React from 'react';
import {View, Text, Image} from 'react-native';
import charmander from '../../assets/charmander.png';
import styles from './styles';

export default function Pokemon_3() {
    return (
        <View style={styles.container}>
            <Image source={charmander} style={styles.img}/>
            <Text style={styles.first_text}>Charmander</Text>
            <Text> Pokemon tipo fogo.</Text>
            
        </View>
    )
};
