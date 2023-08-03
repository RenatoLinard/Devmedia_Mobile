import React from "react";
import {View, Text, Image, ScrollView} from 'react-native';
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
import iconGastly from '../../assets/iconGastly.png';
import styleBottomGastly from './styleBottomGastly';
import iconEevee from '../../assets/iconEevee.png';
import styleBottomEevee from './styleBottomEevee.js';
import styleBottomPidgey from './styleBottomPidgey.js';
import iconPidgey from '../../assets/iconPidgey.png';
import styleBottomSnorlax from './styleBottomSnorlax.js';
import iconSnorlax from '../../assets/iconSnorlax.png';
import iconZapdos from '../../assets/IconZapdos.png';


export default function Inicial(props) {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Image source={logoPokemon} style={styles.imgTitulo}/>

                <Text style={styles.texto}> Escolha um pokemon para ver 
                    as suas informações </Text>

                <Image source={pokemonInicial} style={styles.imgPrinc}/>
            </View>
       
            <ScrollView>
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

                <View  style={styleBottomGastly.viewTouch}
                    onTouchEnd={() => {props.navigation.navigate('GASTLY')}}>
                  <Image source={iconGastly} style={styleBottomGastly.icon}/>
                  <Text style={styleBottomGastly.fontViewTouch}> Gastly </Text>  
                </View>

                <View style={styleBottomEevee.viewTouch}
                    onTouchEnd={() => {props.navigation.navigate('EEVEE')}}>
                  <Image source={iconEevee} style={styleBottomEevee.icon}/>
                  <Text style={styleBottomEevee.fontViewTouch}> Eevee </Text>  
                </View>
        
                <View style={styleBottomPidgey.viewTouch}>
                  <Image source={iconPidgey} style={styleBottomPidgey.icon}/>
                  <Text style={styleBottomPidgey.fontViewTouch}> Pidgey </Text>  
                </View>
        
                <View style={styleBottomSnorlax.viewTouch}>
                  <Image source={iconSnorlax} style={styleBottomSnorlax.icon}/>
                  <Text style={styleBottomSnorlax.fontViewTouch}> Snorlax </Text>  
                </View>
        
                 <View  style={styles.viewTouch}>
                    <Image source={iconZapdos} style={styles.icon}/>
                    <Text style={styles.fontViewTouch}> Zapdos </Text>  
                 </View>

            </ScrollView>
            

        </View>
    )
};
