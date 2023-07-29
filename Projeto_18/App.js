import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaHome from "./components/TelaHome/";
import TelaSobre from "./components/TelaSobre/";
import TelaContato from "./components/TelaContato/";



const Tabs = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Tela Inicial" component={TelaHome}/>
                <Tabs.Screen name="Tela Contato" component={TelaContato}/>
                <Tabs.Screen name="Tela Sobre" component={TelaSobre}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
};
