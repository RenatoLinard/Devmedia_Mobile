import React from "react";
import { View, Text, Image } from "react-native";
import logo from '../../assets/Personal.png';
import styles from "./styles";


export default function Inicial() {
    return(
        <View style={styles.container}>

            <View style={styles.upper}>
                 <Image
                    source={logo}
                    style={styles.logo}
                  />
            </View>

            <View>
                
            </View>

        </View>
    )
};
