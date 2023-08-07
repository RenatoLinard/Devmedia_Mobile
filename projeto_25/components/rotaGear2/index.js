import React from "react";
import {ImageBackground, View, Text, ScrollView} from 'react-native';
import background from '../../assets/gear2.png'
import styles from "./styles";



export default function Gear2() {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
            resizeMode="center"
        >
            <View style={styles.box}>
                <ScrollView>
                     <Text style={styles.texto}>O Gear Second foi apresentado durante o arco
                        de Ennies Lobby durante a luta de Luffy contra Blueno.
                        Essa transformação foi apresentada no episódio 272 do
                        anime e no capítulo 388 do mangá.</Text>

                    <Text style={styles.texto}>
                        O Gear Second faz com 
                        que o sangue de Luffy corra tão rapidamente em 
                        seu corpo que este começa a ferver e tomar um tom
                        avermelhado, aumentando incrivelmente a velocidade
                         em que Luffy e locomove e disfere ataques.</Text>
                </ScrollView>
            </View>

            
            
        </ImageBackground>
    )
};
