import React from "react";
import { Button, View } from "react-native";



export default function TelaInicial(props) {
    return (
        <View style= {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title = 'Abrir menu' 
                    onPress = {() => {props.navigation.openDrawer()}}/>
        </View>
    )
};
