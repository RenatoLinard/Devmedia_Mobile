import React, {useState} from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";



const Conteudo = () => {
    const[ numeroSortedo, setNumeroSorteado] = useState(1);

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * (101 - 1) + 1);
        setNumeroSorteado(novoNumero);
    } 

    return(
        <View style={styles.container}>
            <Text style={styles.txt1}>
                Toque no botão e veja quem é o vencedor de 1 à 100
            </Text>

            <View style={styles.circle}>
                <Text style={styles.number}>
                     {numeroSortedo}
                </Text>

            </View>

            <Pressable
                style={styles.buttom}
                onPress={gerarNumero}
            >
                <Text style={styles.txt2}>
                    Sortear 
                </Text>
            </Pressable>

        </View>
    )
}

export default Conteudo;
