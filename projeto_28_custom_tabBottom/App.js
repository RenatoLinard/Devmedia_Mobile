import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from './components/rotaInicial';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Sobre from './components/rotaSobre';



const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator 
                screenOptions={{
                    tabBarActiveTintColor: '#F2DAAC',
                    tabBarLabelStyle: {fontSize: 15, 
                            fontWeight: 'bold',
                            fontStyle: 'italic'},
                    tabBarInactiveTintColor: '#734822',
                    tabBarStyle: {backgroundColor: '#402110'}
                }}
            >
                <Tabs.Screen 
                    name='Lyrics' 
                    component={Inicial}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="music-box-multiple-outline" size={24} color={color} />
                        ),
                    }} 

                />

                <Tabs.Screen
                    name='Sobre'
                    component={Sobre}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Octicons name="info" size={24} color={color}/>
                        ),
                    }}

                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
};

