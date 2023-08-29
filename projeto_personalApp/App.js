import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "./components/rotaInicial";
import Login from './components/rotaLogin';



const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicial"
                    component={Inicial}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
};
