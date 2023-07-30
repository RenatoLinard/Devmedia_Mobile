import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Descrição from "./components/Descrição";
import Home from "./components/Home";


const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Tela Descrição" component={Descrição}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
