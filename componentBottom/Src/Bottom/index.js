import React from "react";
import { View, Text, Image } from "react-native";
import logoPokemon from '../../assets/logopokemon.png';
import styles from './styles';



export default function Bottom(props) {
    return(
        <View style={styles.areaItem} onTouchEnd={() => {props.navigation.navigate('Bottom')}}>
            <Image source={logoPokemon} style={styles.imagem}/>

           <Text style={styles.textoInformativo}> Pokemons </Text>
        </View>
    )
};
