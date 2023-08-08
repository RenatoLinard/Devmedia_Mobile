import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './src/components/rotaInicio';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import Quartos from './src/components/rotaQuartos';
import Contato from './src/components/rotaContato';

const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='Inicio'
                    component={Inicio}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Ionicons name="home" size={26} color={color} />
                        ),
                    }} 
            />

            <Tabs.Screen name='Quartos'
                component={Quartos}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="room" size={26} color={color} />
                    ),
                }} 
            />

            <Tabs.Screen name='Contato'
                component={Contato}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="room" size={26} color={color} />
                    ),
                }} 
            />
            </Tabs.Navigator>
        </NavigationContainer>
    )
};
