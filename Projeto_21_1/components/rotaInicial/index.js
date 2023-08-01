import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image } from 'react-native';
import contato from '../../assets/contato.png';
import sobre from '../../assets/sobre.png'
import styles from './styles';


export default function Inicial(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Tela Inicial </Text>

            <Text style={styles.texto}> Toque nos elementos abaixo para navegar pelas rotas
                    do aplicativo </Text>
            
            <View style={styles.viewTouch} 
                onTouchEnd={() => {props.navigation.navigate('Tela Contato')}}>
                <Image source={contato} style={styles.icon}/>
                <Text style={styles.fontViewTouch}> Tela contato </Text>
            </View>
        
            <View style={styles.viewTouch}>
                <Image source={sobre} style={styles.icon}/>
                <Text style={styles.fontViewTouch}> Tela sobre </Text>
            </View>

            
        </View>
    )
};

