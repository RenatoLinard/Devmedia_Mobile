import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicial from "./components/rotaInicial";
import { FontAwesome5 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={{
                    headerShown: false,
                    
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                    tabBarStyle: {
                        backgroundColor: '#262626'
                    },
                    tabBarActiveTintColor: '#A6A6A6',
                    tabBarInactiveTintColor: '#404040',

                }}
            >

                <Tabs.Screen
                    name="Inicial"
                    component={Inicial}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="app-store" size={24} color={color} />
                        )
                    }}
                />

            </Tabs.Navigator>
        </NavigationContainer>
    )
};
