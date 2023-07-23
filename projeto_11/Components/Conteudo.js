import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import linha_nintendo from '../assets/linha_nintendo.png';
export default function Conteudo() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}> Linha de Consoles </Text>

            <Image source={linha_nintendo} style={estilos.img} />

            <Text style={estilos.descrição}> Com seu console Switch você terá entretenimento garantido
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



const estilos = StyleSheet.create({
    titulo: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing:2,
    },

    img: {
        marginTop: 20,
        width: 350,
        height: 200,
        marginBottom: 20,
    },

    descrição: {
        fontSize: 17,
        fontStyle: 'italic',
        textAlign: 'justify',
    },

    container: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
    }
})




