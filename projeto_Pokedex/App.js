import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Inicial from './components/rotaInicial';
import Pikachu from "./components/rotaPikachu";
import Charmander from "./components/rotaCharmander";
import Bulbassauro from "./components/rotaBulbassauro";
import Squirtle from "./components/rotaSquirtle";
import Gastly from "./components/rotaGastly";
import Eevee from './components/rotaEevee/';


const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="POKEDEX" component={Inicial}/>
                <Stack.Screen name="PIKACHU" component={Pikachu}/>
                <Stack.Screen name="CHARMANDER" component={Charmander}/>
                <Stack.Screen name="BULBASSAURO" component={Bulbassauro}/>
                <Stack.Screen name="SQUIRTLE" component={Squirtle}/> 
                <Stack.Screen name="GASTLY" component={Gastly}/> 
                <Stack.Screen name="EEVEE" component={Eevee}/> 

            </Stack.Navigator>
        </NavigationContainer>
    )
};
