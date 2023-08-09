
import React from "react";
import { View, ImageBackground, Text, ScrollView} from "react-native";
import background from '../../assets/background.jpg';
import styles from "./styles";




export default function Sobre() {
    return(
        <ImageBackground 
            source={background}     
            style={styles.container}
        >
            <View style={styles.box}>
                <Text style={styles.titulo}> Sobre</Text>
                <Text style={styles.texto}> Artista: Jason Upton {'\n'}
                    Data de lançamento: 2012 {'\n'}
                    Álbum: Glimpse (Live) {'\n'}
                    Gêneros: Gospel, Christian {'\n'}
                </Text>

            </View>
        </ImageBackground>
    )
};
