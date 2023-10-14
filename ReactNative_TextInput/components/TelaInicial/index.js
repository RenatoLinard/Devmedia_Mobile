import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import styles from "./styles";
import botao from '../../assets/botao.png';

const TelaInicial = () => {
    const [NumeroSorteado, setNumeroSorteado] = useState(0);

    const [InputFocus, setInputFocus] = useState('');

    const GerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * 100 + 1);
        setNumeroSorteado(novoNumero);
    }


    return(
        <View style= {styles.geral}>
            
            <View style={styles.container}>
                <Text style={styles.txt1}>
                   Escolha os valores mínimos e máximos para iniciar o sorteio:
                </Text>
            </View>
            
            <View style={styles.box}>
                <Text> Valor Mínimo: </Text>
                <TextInput
                    style={styles.txtInput}
                    textAlign="center"
                    keyboardType="number-pad"
                    maxLength={5}
                    autoFocus= {true}
                />
            </View>
        
            <View style={styles.box}>
                <Text> Valor Máximo: </Text>
                <TextInput
                    style={styles.txtInput}
                    cursorColor={'black'}
                    textAlign="center"
                    keyboardType="number-pad"
                    maxLength={5}
                />
            </View>
            
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
