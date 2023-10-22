import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Km_Mi from './components/Quilometros_Milhas';
import Mi_Km from './components/Milhas_Quilometros';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Tab.Screen 
                    name='Kilometros para Milha' 
                    component={Km_Mi}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome5 name="ruler-horizontal" size={24} color="black" />
                        )   
                    }}
                />

                <Tab.Screen 
                    name='Milhas para Kilometros' 
                    component={Mi_Km}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="ruler-square" size={24} color="black" />
                        )
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;
