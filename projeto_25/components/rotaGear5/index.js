import React from "react";
import {ImageBackground, View, Text, ScrollView} from 'react-native';
import background from '../../assets/gear5.png'
import styles from "./styles";



export default function Gear5() {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.box}>
                <ScrollView>
                     <Text style={styles.texto}>Como dito antes, cada gear de
                        Luffy funciona como um novo patamar de poder para o
                        protagonista. No caso, o gear 5 representa o
                        “despertar” de sua Akuma no Mi (fruto do diabo).
                        Mas o que seria isso?</Text>

                    <Text style={styles.texto}>Desde o início do mangá/anime,
                        o fruto de Luffy era comumente conhecido como
                        Gomu Gomu no Mi, uma fruta do tipo Paramecia.
                        Os frutos inseridos nessa classificação permitem ao
                        usuário modificar sua estrutura corporal ou, até mesmo,
                        produzir e manipular substâncias. É o caso de Buggy,
                        por exemplo, um personagem que tem o poder de dividir
                        seu próprio corpo em várias partes.</Text>

                    <Text style={styles.texto}>Ao contrário do que se acreditava,
                        eventos recentes do arco do País de Wano revelaram
                        um surpreendente segredo por trás da história da Akuma
                        no Mi do Chapéu de Palha que é, na verdade, a
                        “Hito Hito no Mi, Modelo: Nika“, uma fruta do tipo Zoan
                        mítica. No centro de todo esse mistério está a grande
                        transformação, momento no qual Luffy finalmente assume
                        uma de suas formas mais poderosas
                        (e temidas pelo Governo Mundial) — Nika — Deus do Sol e
                        detentor do poder mais ridículo do mundo.</Text>

                    
                </ScrollView>
            </View>

            
            
        </ImageBackground>
    )
};
