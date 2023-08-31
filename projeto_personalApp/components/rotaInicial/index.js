import React from "react";
import { View, Pressable, Image } from "react-native";
import styles from "./styles";
import aluno from '../../assets/bottom_sou_aluno.png';
import personal from '../../assets/bottom_sou_personal.png';
import barraTitulo from '../../assets/barraTitulo.png';

export default function Inicial(props) {
    return(
        <View style={styles.container}>
                <Image
                    source={barraTitulo}
                    style={styles.barraTitulo}

                />
            <View style={styles.cards}>
                 <Pressable
                    onPress={() => {props.navigation.navigate('LoginAluno')}}
                 >
                    <Image
                        source={aluno}
                        style={styles.img}
                    />
                 </Pressable>

                 <Pressable>
                    <Image
                        source={personal}
                        style={styles.img}
                    />
                 </Pressable>
           </View> 
        </View>
    )
};
