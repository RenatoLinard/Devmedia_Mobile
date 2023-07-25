import React from "react";
import {View} from 'react-native';
import BarraTitulo from "./componentes/barraTitulo";
import Card from "./componentes/Card";
import Conteudo from "./componentes/Conteudo";
import estiloapp from "./estiloapp";

export default function App() {
    return (
        <View>

            <BarraTitulo/>
            <Card/>
            <View style={estiloapp.container}>
                <Conteudo/>
            </View>

        </View>
    );
}

