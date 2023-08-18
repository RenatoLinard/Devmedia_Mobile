import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Xbox from './components/rotaXbox';
import { FontAwesome5 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function() {
    return(
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#082040',
                },
                headerTitleStyle: {
                    fontSize: 20,
                    color: 'white',
                },
                tabBarStyle: {
                    backgroundColor: '#082040',
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#148BA6',
            }}
            >

                <Tabs.Screen
                name='Xbox'
                component={Xbox}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="xbox" size={24} color={color} />
                    )
                }}
                />

            </Tabs.Navigator>
        </NavigationContainer>
    )
};
