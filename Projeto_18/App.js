import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicial from "./components/TelaInicial";
import TelaContato from "./components/TelaContato";
import TelaSobre from "./components/TelaSobre";



const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator>

                <Tabs.Screen name="Tela Inicial" component={TelaInicial}/>
                <Tabs.Screen name="Tela Contato" component={TelaContato}/>
                <Tabs.Screen name="Tela Sobre" component={TelaSobre}/>
                
            </Tabs.Navigator>
        </NavigationContainer>
    )
};
