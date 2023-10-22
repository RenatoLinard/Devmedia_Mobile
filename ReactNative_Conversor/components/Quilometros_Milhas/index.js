import React from "react";
import {ImageBackground, View, Text, Pressable, Image, TextInput} from 'react-native';
import background from '../../assets/background.jpg'
import styles from './styles';
import button from '../../assets/button.png';



const Km_Mi = () => {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
            blurRadius={2}
        >
            
            <View style={styles.first_box}>
                <Text style={styles.titulo}>
                    Conversor de Quilomêtros para Milhas
                </Text>

                <View>
                    <Pressable
                    >
                        <Image
                            source={button}
                            style={styles.button}
                        /> 
                    </Pressable>

                    <TextInput/>
                </View>
            </View>

            <View style={styles.second_box}>

            </View>


        </ImageBackground>
    )
} 

export default Km_Mi;
