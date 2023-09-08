import React from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";
import logo from '../../assets/logo.png';


export default function LoginPersonal(){
    return(
        <View style={styles.container}>

            <ScrollView style={styles.card}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
            </ScrollView>
        </View>
    )
};
