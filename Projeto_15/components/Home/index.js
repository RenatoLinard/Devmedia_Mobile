import React from 'react';
import {View, Text, Image} from 'react-native';
import logo_pokemon from '../../assets/logo_pokemon.png';
import styles from './styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={logo_pokemon} style={styles.img}/>
            <Text style={styles.first_text}>Conhecendo os 3 Pokemons inicias da primeira temporada</Text>
            <Text style={styles.second_text}> Arraste o dedo da esquerda para direita para abrir o menu 
                    lateral.</Text>
            
        </View>
    )
};
