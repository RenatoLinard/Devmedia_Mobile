import React from "react";
import { View, ImageBackground, Text, ScrollView} from "react-native";
import background from '../../assets/background.jpg';
import styles from "./styles";
export default function Inicial() {
    return(
        <ImageBackground 
            source={background}     
            style={styles.container}
        >
            <View style={styles.box}>
                <Text style={styles.titulo}> I Built My House Upon a Stone </Text>
                <ScrollView>

                    <Text style={styles.texto}>
                        I built my house upon a stone
                    A stone so rarely built upon I feel quite foolish and naïve
                    I learned to lead from God’s own son
                    A man rejected by his own, his only throne a cross of shame
                    Jesus, Jesus </Text>

                    <Text style={styles.texto}>To the lamb of God who knows me by my name
                    All the glory, all the honor, all the praise
                    To the one my future hope depends upon
                    I am trusting you, I am trusting you my God</Text>

                    <Text style={styles.texto}>My story’s crazy but it’s true
                    It started out confusing too and just gets stranger by the day
                    And that's okay
                    I’ve been a blind man on the road
                    I’ve been the boy running back home
                    I’ve been the sinner and the saint
                    But the love of God has never changed</Text>

                    <Text style={styles.texto}>You know me by my name
                    He knows you by your name
                    We're the sons and daughters of the living God
                    He knows us by our name</Text>
                </ScrollView>
            </View>
        </ImageBackground>
    )
};
