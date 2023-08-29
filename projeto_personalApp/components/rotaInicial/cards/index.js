import React from 'react-native';
import { View, Image } from 'react-native';
import styles from './styles';
import aluno from '../../../assets/sou_aluno.png';
import personal from '../../../assets/sou_personal.png';

export default function Cards() {
    return(
        <View style={styles.container}>
            <Image
                source={aluno}
                style={styles.img}
            />

            <Image
                source={personal}
                style={styles.img}
            />
        </View>
    )
};
