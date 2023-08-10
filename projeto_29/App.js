import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gato from "./components/rotaGato";
import Cachorro from "./components/rotaCachorro";
import { FontAwesome5, Foundation } from '@expo/vector-icons';






const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 15,
                    },
                    tabBarActiveTintColor: '#8C4A3B',
                    tabBarInactiveTintColor: '#D9B68B',
                    tabBarStyle: {
                        backgroundColor: '#8C4A3B'
                    },
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#8C4A3B',
                        height: 100,
                    },
                    headerTitleStyle: {
                        color: '#F2D57E',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        fontSize: 30,
                    }

                }}
            >
                <Tabs.Screen 
                    name="Gato" 
                    component={Gato}
                    options={{
                        tabBarIcon:(color) => (
                            <FontAwesome5 name="cat" size={25} color={color}/>
                        ),
                    }} 
                />
                <Tabs.Screen 
                    name="Cachorro" 
                    component={Cachorro}
                    options={{
                        tabBarIcon: (color) => (
                            <Foundation name="guide-dog" size={38} color={color}/>
                        ),
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
};
