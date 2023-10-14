import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./styles";
import botao from '../../assets/botao.png';
import BoxOnFocus from "../CaixaTxt/BoxTxtOnFocus";


const TelaInicial = () => {
    const [NumeroSorteado, setNumeroSorteado] = useState(0);

    const GerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * 100 + 1);
        setNumeroSorteado(novoNumero);
    }


    return(
        <View style= {styles.geral}>
            
            <View style={styles.CaixaTexto}>
                <Text style={styles.txt1}>
                   Escolha os valores mínimos e máximos para iniciar o sorteio:
                </Text>
            </View>
            
            <BoxOnFocus
            />
            
            
            <Pressable
                onPress={() => {
                    {GerarNumero}
                }}
            >
                <Image
                    source={botao}
                    style={styles.botao}
                />
            </Pressable>
            
            <View style={styles.circle}>
                <Text style={styles.txtCircle}> {NumeroSorteado} </Text>
            </View>
            

        </View>
    )
}

export default TelaInicial;
