import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './componentes/Home';
import Telas from './componentes/Telas';
import Rotas from './componentes/Rotas';
import Biblioteca from './componentes/Biblioteca';

const Tabs = createBottomTabNavigator()

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='Home' component={Home}/>
                <Tabs.Screen name='Telas' component={Telas}/>
                <Tabs.Screen name='Rotas' component={Rotas}/>
                <Tabs.Screen name='Biblioteca' component={Biblioteca}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
};
