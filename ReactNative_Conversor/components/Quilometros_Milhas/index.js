import React, { useState } from "react";
import {ImageBackground, View, Text, Pressable, TextInput} from 'react-native';
import background from '../../assets/background.jpg';
import styles from './styles';



const Km_Mi = () => {
    //Varival de estado Milhas será usada no segundo box para mostrar o valor 
    //convertido. E sua função será usado dentro da função de conversão 
    const [Milhas, setMilhas] = useState(0);
    //Variavel Quilometros será usada no calculo de conversão. E sua função
    //será usada no TextInput dentro da propriedade onChangeText.
    const [Quilometros, setQuilometros] = useState(0);
    const Convert = () => {
        numeroConvertido = Quilometros / 1.609
        setMilhas(numeroConvertido.toFixed(2)
        )
    }

    return(
        <ImageBackground
            source={background}
            style={styles.container}
            blurRadius={2}
        >
            
            <View style={styles.first_box}>
                <Text style={styles.titulo}>
                    Conversor de Quilomêtros para Milhas
                </Text>

                <View style={styles.align_Botton_Txt}>
                    <Pressable
                        onPress={Convert}
                    >
                        <View style={styles.button}>
                            <Text
                               style={{
                                   fontSize: 18,
                                    color: 'black'
                               }} 
                            > Quilômetro </Text>                            
                        </View>
                    </Pressable>

                    <TextInput
                        style={styles.txt_Input} 
                        keyboardType="number-pad"                        
                        autoFocus={true}
                        textAlign='center' 
                        cursorColor={'#A62152'} 
                        onChangeText={setQuilometros}
                        
                    />
                </View>

            </View>

            <View style={styles.second_box}>
                <Text style={styles.number_second_box}>{Milhas} </Text>
                <Text style={styles.txt_second_box}> Milhas </Text>
            </View>


        </ImageBackground>
    )
} 

export default Km_Mi;
