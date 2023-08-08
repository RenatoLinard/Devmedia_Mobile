import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 

import Home from './componentes/Home';
import Telas from './componentes/Telas';
import Rotas from './componentes/Rotas';
import Biblioteca from './componentes/Biblioteca';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const Tabs = createBottomTabNavigator()

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Entypo name="home" size={24} color={color} />
                        ),
                    }}/>
                <Tabs.Screen 
                    name='Telas'
                    component={Telas}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialIcons name="add-to-home-screen" size={25} color={color} />                            
                        ),
                    }}/>
                <Tabs.Screen 
                    name='Rotas' 
                    component={Rotas}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="route" size={24} color={color} />
                        ),
                    }}/>
                <Tabs.Screen 
                    name='Biblioteca' 
                    component={Biblioteca}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Ionicons name="library" size={24} color={color} />
                        ),
                    }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
};
