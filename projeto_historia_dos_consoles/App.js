import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Xbox from './components/rotaXbox';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import PlayStation from './components/rotaPlayStation';
import Nintendo from './components/rotaNintendo';



const Tabs = createBottomTabNavigator();

export default function() {
    return(
        <NavigationContainer>

            <Tabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#262626',
                },
                headerTitleStyle: {
                    fontSize: 20,
                    color: 'white',
                },
                tabBarStyle: {
                    backgroundColor: '#262626',
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#595959',
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

                <Tabs.Screen
                name='PlayStation'
                component={PlayStation}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="playstation" size={24} color={color} />
                    )
                }}
                />

                <Tabs.Screen
                name='Nintendo'
                component={Nintendo}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="nintendo-game-boy" size={24} color={color} />
                    )
                }}
                />
            </Tabs.Navigator>

        </NavigationContainer>
    )
};
