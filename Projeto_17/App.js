import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaInicial from "./components/TelaInicial";
import Contato from "./components/Contato";


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Tela Inicial" component={TelaInicial}/>
                <Drawer.Screen name="Contato" component={Contato}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
};
