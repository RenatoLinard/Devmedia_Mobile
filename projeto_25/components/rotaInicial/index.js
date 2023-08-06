import React from "react";
import { ImageBackground, ScrollView, Pressable, Text, Image } from "react-native";
import background from '../../assets/background.jpg';
import styles from './styles';
import card1 from '../../assets/card1.png';
import icon1 from '../../assets/Crountch-One-Piece-Jolly-Roger-Luffys-flag.256.png';
import stylecard from './styleCard';

export default function Inicial(props) {
    return(
        <ImageBackground
            source={background}
            style={styles.container}
        >

            <ScrollView>

                <ImageBackground
                     source={card1}                
                     style={stylecard.container}
                     borderRadius={30}
                 >
                     <Pressable
                        style={stylecard.boxContainer}
                         onPress={() => {props.navigation.navigate('Gear Second')}}
                    >
                         <Text style={stylecard.textcard}> Gear Second </Text>
                        <Image source={icon1} style={stylecard.icon} />
                    </Pressable>
                </ImageBackground>

            </ScrollView>
        </ImageBackground>
    )
};
