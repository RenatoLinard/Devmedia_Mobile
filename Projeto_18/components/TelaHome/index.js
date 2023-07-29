import React from 'react';
import { Button, View, Text } from 'react-native';
import estilo from '../styles';



export default function TelaHome(props) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}> Tela Inicial </Text>
            <Text style={estilo.texto}> Toque nos botões abaixo para navegar pelas rotas do app </Text>
            <View style={estilo.buttonBox}>
                <Button title='Contato'
                        onPress={() => {props.navigation.navigate('Tela Contato')}
                        }/>
            </View>
            <View style={estilo.buttonBox}>
                <Button title='Sobre'
                        onPress={() =>{props.navigation.navigate('Tela Sobre')}}/>
            </View>
        </View>
    )
};

