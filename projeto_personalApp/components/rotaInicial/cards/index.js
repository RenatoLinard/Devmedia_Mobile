import React from 'react-native';
import { Pressable, Image } from 'react-native';
import styles from './styles';
import aluno from '../../../assets/sou_aluno.png';
import personal from '../../../assets/sou_personal.png';

export default function Cards(props) {
    return(
        <Pressable style={styles.container}
            onPress={() => {props.navigation.navigate('Login')}}>
            <Image
                source={aluno}
                style={styles.img}
            />

            <Image
                source={personal}
                style={styles.img}
            />
        </Pressable>
    )
};
