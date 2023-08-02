import React from "react";
import {View, Text, Image} from 'react-native';
import logoPokemon from '../../assets/logoPokemon.png';
import pokemonInicial from '../../assets/inicial2.jpg';
import styles from "./styles";
import iconPikachu from '../../assets/pikachu.png';
import iconCharmander from '../../assets/charmander.png';
import style from "./styleBottomCharmander";
import styleBottomBulbassauro from "./styleBottomBulbassauro";
import iconBulbassauro from '../../assets/bullbasaur.png';
import iconSquirtle from '../../assets/squirtle.png';
import styleBottomSquirtle from "./styleBottomSquirtle";


export default function Inicial(props) {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Image source={logoPokemon} style={styles.imgTitulo}/>

                <Text style={styles.texto}> Escolha um pokemon para ver 
                    as suas informações </Text>

                <Image source={pokemonInicial} style={styles.imgPrinc}/>
            </View>

            <View  style={styles.viewTouch} 
                    onTouchEnd={() => {props.navigation.navigate('PIKACHU')}}>
                <Image source={iconPikachu} style={styles.icon}/>
                <Text style={styles.fontViewTouch}> Pikachu </Text>  
            </View>

            
            <View  style={style.viewTouch}
                    onTouchEnd={() => {props.navigation.navigate('CHARMANDER')}}>
                <Image source={iconCharmander} style={style.icon}/>
                <Text style={style.fontViewTouch}> Charmander </Text>  
            </View>

            <View  style={styleBottomBulbassauro.viewTouch}
                    onTouchEnd={() => {props.navigation.navigate('BULBASSAURO')}}>
                <Image source={iconBulbassauro} style={style.icon}/>
                <Text style={style.fontViewTouch}> Bulbassauro </Text>  
            </View>
            
            <View  style={styleBottomSquirtle.viewTouch}
                    onTouchEnd={() => {props.navigation.navigate('SQUIRTLE')}}>
                <Image source={iconSquirtle} style={styleBottomSquirtle.icon}/>
                <Text style={styleBottomSquirtle.fontViewTouch}> Squirtle </Text>  
            </View>
            

        </View>
    )
};
