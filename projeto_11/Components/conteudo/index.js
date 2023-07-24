import React from 'react';
import {View, Text, Image} from 'react-native';
import linha_nintendo from '../../assets/linha_nintendo.png';
import style from '../conteudo/style';

export default function Conteudo() {
    return (
        <View style={style.container}>
            <Text style={style.titulo}> Linha de Consoles </Text>

            <Image source={linha_nintendo} style={style.img} />

            <Text style={style.descrição}> Com seu console Switch você 
            terá entretenimento garantido
            todos os dias. Sua tecnologia foi criada para colocar novos 
            desafios para jogadores novatos e especialistas. Switch tornou-se 
            um dos consoles mais versáteis do mercado graças ao seu uso 
            portátil e desktop. A Nintendo desenvolveu este modelo com o 
            objetivo de ter todos os confortos da tecnologia de elite em um 
            dispositivo portátil com o qual você pode jogar e desfrutar de 
            diversos conteúdos online.</Text>
        </View>
    );
}






