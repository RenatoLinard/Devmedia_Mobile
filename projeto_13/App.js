import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from './componentes/TelaInicial';
import TelaPerfil from './componentes/TelaPerfil';


const Tabs = createBottomTabNavigator()

export default function App () {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='Inicio' component={TelaInicial}/>
                <Tabs.Screen name='Perfil' component={TelaPerfil}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}
