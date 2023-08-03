import React from "react";
import { View, Text, ImageBackground } from "react-native";

import black from './assets/black_cover.jpg';
import styles from './styles';



export default function App() {
    return(
        <View style={styles.container}>
            <ImageBackground  
                source={black} 
                resizeMode="cover"
                blurRadius={2}
                style={styles.background}>
                
                <View style={styles.card}>
                    <Text style={styles.titulo}> Black Cover</Text>
               
                     <Text style={styles.paragrafo}> É uma série de mangá 
                         adolescente do tipo shounen e fantasia
                          japonês, escrita e ilustrada por Yūki Tabata </Text>
                
                   <Text style={styles.paragrafo}> A história se centra em um
                         jovem chamado Asta, nascido
                          sem poder mágico no reino de Clover (algo inédito), mas com 
                        sua ambição, habilidades recém-descobertas e amigos, 
                        pretende tornar-se o próximo Rei Mago.</Text> 

                </View>

            </ImageBackground>

        </View>
    )
};
