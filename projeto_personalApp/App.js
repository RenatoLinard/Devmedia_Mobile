import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "./components/rotaInicial";
import Login from "./components/rotaLogin";
import CreateLogin from "./components/rotaCreateAccount";


const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }} 

            >
                <Stack.Screen
                    name="Inicial"
                    component={Inicial}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="CreateLogin"
                    component={CreateLogin}
                />
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
};
