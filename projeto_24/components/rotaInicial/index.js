import React from "react";
import { ImageBackground, ScrollView, Pressable, Text, Image} from "react-native";
import background from '../../assets/background.jpg';
import styles from './styles';
import imgcard1 from '../../assets/card_1.png';
import icon from '../../assets/icons8-cross-64.png';
import imgcard2 from '../../assets/card_2.png';
import icon2 from '../../assets/icons8-cruz-50.png';


export default function Inicial(props) {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
        > 

            <ScrollView>

                <ImageBackground
                    source={imgcard1}            
                    style={styles.card} 
                    borderRadius={15}
                    blurRadius={2}
                    resizeMode="cover"
                >
                    <Text style={styles.titulo}> Sinal da Cruz </Text>

                    <Pressable 
                        onPress={() => {props.navigation.navigate('Tela Sinal')}} 
                    >
                       <Image source={icon} style={styles.icons} />
                    </Pressable>
                </ImageBackground>

                <ImageBackground
                    source={imgcard2}            
                    style={styles.card} 
                    borderRadius={15}
                    blurRadius={2}
                    resizeMode="cover"
                >
                    <Text style={styles.titulo}> Creio(Credo) </Text>

                    <Pressable 
                        onPress={() => {props.navigation.navigate('Tela Creio')}} 
                    >
                       <Image source={icon2} style={styles.icons} />
                    </Pressable>
                </ImageBackground>

            </ScrollView>
        </ImageBackground>
    )
};
