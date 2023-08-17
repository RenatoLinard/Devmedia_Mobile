import React from "react";
import { View } from "react-native";
import BarraTitulo from "./components/rotaBarraTitulo";
import Texto from "./components/rotaTexto";
import Cards from "./components/rotaCards";

export default function App() {
    return(
        <View style={{flex:1, backgroundColor: '#D9C6BA'}}>
            <BarraTitulo/> 
            <Texto/>
            <Cards/>
        </View>
    )
};
