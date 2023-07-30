import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles';



export default function TelaInicial(props) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Tela Inicial
            </Text>
            
            <Text style={styles.text}>
                Toque nos botões abaixo para navegar pelas rotas do aplicativo.
            </Text>
            
            <View style={styles.boxBottom}>
                <Button title='Tela Contato' 
                    onPress={() => {props.navigation.navigate('Tela Contato')}}
                />
            </View>
           
            <View style={styles.boxBottom}>
                <Button title='Tela Sobre' 
                     onPress={() => {props.navigation.navigate('Tela Sobre')}}
            />
            </View>
       </View> 
    )
};
