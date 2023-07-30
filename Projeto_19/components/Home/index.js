import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles';



export default function Home(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Stack Navigation </Text>

            <Text style={styles.texto}> 
                Toque no botão abaixo para navegar pela a rota descrição </Text>

            <View style={styles.boxBottom}>
               <Button title='Tela Descrição'
                        onPress={() => {props.navigation.navigate('Tela Descrição')}}/> 
            </View>
        </View>
    )
};
