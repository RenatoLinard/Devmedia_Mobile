import React from "react";
import { View, Pressable, Image } from "react-native";
import styles from "./styles";
import aluno from '../../assets/botao_aluno.png';
import personal from '../../assets/botao_personal.png';
import logo from '../../assets/logo.png';
export default function Inicial(props) {
    return(
        <View style={styles.container}>

            <View style={styles.barraTitulo}>
                <Image
                    source={logo}
                    style= {styles.logo}
                />

            </View>

            <View style={styles.cards}>
                 <Pressable
                    onPress={() => {props.navigation.navigate('LoginAluno')}}
                 >
                    <Image
                        source={aluno}
                        style={styles.img}
                    />
                 </Pressable>

                 <Pressable
                    onPress={() => {props.navigation.navigate('LoginPersonal')}}
                 >
                    <Image
                        source={personal}
                        style={styles.img}
                    />
                 </Pressable>
           </View> 
        </View>
    )
};
