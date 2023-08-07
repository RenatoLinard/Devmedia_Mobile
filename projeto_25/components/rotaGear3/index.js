import React from "react";
import {ImageBackground, View, Text, ScrollView} from 'react-native';
import background from '../../assets/gear3.png'
import styles from "./styles";



export default function Gear3() {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.box}>
                <ScrollView>
                     <Text style={styles.texto}>Ainda no arco de Ennies Lobby
                        de One Piece, vimos a apresentação do Gear Third no
                        episódio 288 e no capítulo 403 no momento em que Luffy
                        quebra uma enorme porta de ferro que impedia sua passagem.
                        Foi somente em sua luta contra Rob Lucci que vimos o Gear
                        Third em ação.</Text>

                    <Text style={styles.texto}>O Gear Third trabalha nos ossos
                        de Luffy, sendo inflados e aumentando em várias vezes 
                        seu tamanho normal, fazendo com que Luffy literalmente
                        se torne parte gigante e lance ataques poderosos.</Text>
                </ScrollView>
            </View>

            
            
        </ImageBackground>
    )
};
