import React from "react";
import { Button, View } from "react-native";



export default function App() {
    return (
        <View style= {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title = 'Toque aqui' 
                    onPress = {() => {console.log('O botão foi tocado')}}/>
        </View>
    )
};
