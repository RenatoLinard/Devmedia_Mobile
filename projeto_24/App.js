import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './components/rotaInicial';
import Sinal from './components/rotaSinal';
import Creio from './components/rotaCreio';




const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Tela Inicial' component={Inicial}/>
                <Stack.Screen name='Tela Sinal' component={Sinal}/>
                <Stack.Screen name='Tela Creio' component={Creio}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
