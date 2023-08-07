import React from "react";
import {ImageBackground, View, Text, ScrollView} from 'react-native';
import background from '../../assets/gear4.png'
import styles from "./styles";



export default function Gear4() {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.box}>
                <ScrollView>
                     <Text style={styles.texto}>Passando para o arco de
                        Dressrosa em One Piece, vimos a introdução do Gear
                        Fourth na luta entre Luffy e Doflamingo no episódio
                        726 e capítulo 784.</Text>

                    <Text style={styles.texto}>Assim como o Third,
                        o Gear Fourth também atua nos ossos de Luffy,
                        porém com o adicional de uso de Haki, permitindo
                        que Luffy permaneça rígido e elástico ao mesmo tempo,
                        lançando ataques extremamente poderosos e que podem
                        arrebentar com qualquer um, podendo alternar entre 
                        os modos Boundman (padrão) e Snakeman, visto no
                        episódio 870 e capítulo 895.</Text>
                </ScrollView>
            </View>

            
            
        </ImageBackground>
    )
};
