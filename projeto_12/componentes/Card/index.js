import React from "react";
import {View, Text, Image} from 'react-native';
import estilo from '../Card/estilo';
import walter from '../../assets/walter.jpg';

export default function Card() {
    return (
        <View style={estilo.container}>
            
            <View style={estilo.card}>
                <Image source={walter} style={estilo.img}/>

                <Text style={estilo.titulo}> Walter White</Text>
                <Text style={estilo.descrição}> Personagem fictício da série
                                                Braking Bad</Text>
            </View>
        </View> 
    );
}


