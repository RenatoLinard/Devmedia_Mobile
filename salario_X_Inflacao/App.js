import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Salario from './components/rotaSalario';
import Inflacao from './components/rotaInflacao';
import Comparacao from './components/rotaComparacao';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                
                <Tabs.Screen
                    name='Salário'
                    component={Salario}
                    options={{
                        tabBarIcon: ({color}) => (<Feather name="dollar-sign" size={24} color={color} />)}}
                />

                <Tabs.Screen
                    name='Inflação'
                    component={Inflacao}
                    options={{
                        tabBarIcon: ({color}) => (<Feather name="trending-up" size={24} color={color} />)
                    }}
                />

                <Tabs.Screen
                    name='Salário x Inflação'
                    component={Comparacao}
                    options={{
                        tabBarIcon:({color}) => (<MaterialIcons name="compare-arrows" size={24} color={color} />)
                    }}
                />

            </Tabs.Navigator>
        </NavigationContainer>
    )
};
