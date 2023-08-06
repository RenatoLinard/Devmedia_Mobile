import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './components/rotaInicial';
import Gear2 from './components/rotaGear2';


const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Gears do Luffy' component={Inicial}/>
                <Stack.Screen name='Gear Second' component={Gear2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
