import React from "react";
import { View } from "react-native";
import BarraTitulo from './components/barraTitulo';
import Conteudo from "./components/conteudo";

const App = () => (
    <View style={{flex:1}}>
        <BarraTitulo/>
        <Conteudo/>
    </View>
)

export default App;
