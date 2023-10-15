import React, { useState } from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import styles from "./styles";
import botao from '../../assets/botao.png';


const TelaInicial = () => {
    const [NumeroSorteado, setNumeroSorteado] = useState(0);


    const [OnFocus, setOnFocus] = useState('');

    const [ValorMinimo, setValorMinimo] = useState(0);
    const [ValorMaximo, setValorMaximo] = useState(10);

    const validarCampos = (minimo, maximo) => {
    if ( isNaN(minimo) || isNaN(maximo)) {
      alert('Digite os valores');
      return false;
    }

    if ( minimo > maximo ) {
      alert('O valor mínimo deve ser menor que o valor máximo');
      return false;
    }

    return true;
  }
    const GerarNumero = () => {
        const min = parseInt(ValorMinimo);
        const max = parseInt(ValorMaximo);

           if ( !validarCampos(min, max) ) {
      return;
    }
        
        const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
        setNumeroSorteado(novoNumero);
    }

    return(
        <View style= {styles.geral}>
            
            <View style={styles.CaixaTexto}>
                <Text style={styles.txt1}>
                   Escolha os valores mínimos e máximos para iniciar o sorteio:
                </Text>
            </View>
            
            
        <View style={OnFocus==='txt_min'?styles.containerOnFocus:styles.containerOffFocus}>
            <Text style={OnFocus === 'txt_min'? styles.txtOnFocus:styles.txtOffFocus}> Valor Mínimo: </Text>
            <TextInput
                onFocus={() => setOnFocus('txt_min')}
                onBlur={() => setOnFocus('')}
                keyboardType="number-pad"
                autoFocus= {true}
                textAlign="center"
                cursorColor={'#A62152'}
                style={styles.txtOnFocus}
                value={ValorMinimo.toString()}
                onChangeText={setValorMinimo}
            />
        </View>

        <View style={OnFocus==='txt_max'?styles.containerOnFocus:styles.containerOffFocus}>
            <Text style={OnFocus==='txt_max'?styles.txtOnFocus:styles.txtOffFocus}> Valor Máximo: </Text>
            <TextInput
                onFocus={()=>setOnFocus('txt_max')}
                onBlur={()=>setOnFocus('')}
                keyboardType="number-pad"
                textAlign="center"
                cursorColor={'#A62152'}
                style={styles.txtOnFocus}
                value={ValorMaximo.toString()}
                onChangeText={setValorMaximo}
            />
        </View>
            
            <Pressable
                onPress={GerarNumero}
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
