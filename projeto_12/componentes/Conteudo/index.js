import React from 'react';
import {View, Text, Image} from 'react-native';
import estilo from './estilo';
import walter2 from '../../assets/walter2.png';


export default function Conteudo() {
    return (
        <View>
            <Text style={estilo.titulo}> Sobre o Ator </Text>
            <Text style={estilo.topico}> Sua vida </Text>
            <Text style={estilo.texto}> Walter Hartwell White, é um personagem 
            fictício da série de televisão dramática norte-americana 
            Breaking Bad. Foi criado por Vince Gilligan e é interpretado por 
            Bryan Cranston.</Text>
            <Text style={estilo.topico}> Inicio da carreira</Text>
            <Text style={estilo.texto}> Walter era um químico promissor e um dos fundadores da 
            bilionária empresa Gray Matter Technologies</Text>

            <Image source={walter2} style={estilo.img}/>
        </View>
    );
}
