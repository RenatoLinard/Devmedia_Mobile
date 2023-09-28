import React from "react";
import { View, Image, TextInput, Text, Pressable } from "react-native";
import styles from "./styles";
import logo from '../../assets/logo_sem_slogan.png';
import email from '../../assets/o-email.png';
import password from '../../assets/cadeado.png';

export default function Login(props){
    return(
        <View style={styles.container}>

            <View style={styles.card}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <View style={styles.buttom}>
                <Image
                    source={email}
                    style={styles.icons}
                />
                    <TextInput>Email</TextInput>
                </View>

                <View style={styles.buttom}>
                <Image
                    source={password}
                    style={styles.icons}
                />
                    <TextInput>Password</TextInput>
                </View>
                
                <Text style={styles.text}>
                    Forgot password? 
                    <Text style={styles.text_destaque}> Click here</Text>
                </Text>

                <View  style={styles.buttom_enter}>
                    <Text style={styles.text_destaque}> Enter </Text>
                </View>

                <Pressable
                    onPress={() => props.navigation.navigate('CreateLogin')}
                >
                    <Text style={styles.text_pressble}> 
                        Creat an account!
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};
