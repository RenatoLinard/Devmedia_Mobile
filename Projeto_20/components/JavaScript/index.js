import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import javascript from '../../assets/javascript.png';
import styles from './styles';


export default function JavaScript(props) {
    return(
        <View style={styles.container}>
            <Image source={javascript} style={styles.img}/>

            <Text style={styles.titulo}> JavaScript </Text>

            <Text style={styles.texto}> Veja duas tecnologias para se tornar um prgramador
                fullsatck web JavaScript </Text>
            
            <View style={styles.boxBotoes}>
                <Button 
                     title='FRONT END'
                     onPress={() => {props.navigation.navigate('TelaReact')}}
                  />
       
                 <Button  
                     title='BACK END'
                    onPress={() => {props.navigation.navigate('Node')}}
                />

            </View>
        </View>
    )
};
