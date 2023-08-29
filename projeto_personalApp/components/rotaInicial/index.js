import React from "react";
import { View, Pressable, Image } from "react-native";
import styles from "./styles";
import BarraTitulo from "./barraTitulo";
import aluno from '../../assets/sou_aluno.png';
import personal from '../../assets/sou_personal.png';


export default function Inicial(props) {
    return(
        <View style={styles.container}>
            <BarraTitulo/>

            <Pressable onPress={() => {props.navigation.navigate('Login')}}>
                <View style={styles.cards}>
                    <Image
                        source={aluno}
                        style={styles.img}
                    />

                    <Image
                        source={personal}
                        style={styles.img}
                    />
                </View>
            </Pressable>
        </View>
    )
};
