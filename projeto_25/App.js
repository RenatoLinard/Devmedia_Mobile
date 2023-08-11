import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './components/rotaInicial';
import Gear2 from './components/rotaGear2';
import Gear3 from './components/rotaGear3';
import Gear4 from './components/rotaGear4';
import Gear5 from './components/rotaGear5';



const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#132B40',
                    },
                    headerTintColor: '#71C6D9',
                    headerTitleStyle: {
                        fontSize: 30,
                        fontStyle: 'italic',
                        fontWeight: '500',
                    }
                }}
            >
                <Stack.Screen name='Gears do Luffy' component={Inicial}/>
                <Stack.Screen name='Gear Second' component={Gear2}/>
                <Stack.Screen name='Gear Third' component={Gear3}/>
                <Stack.Screen name='Gear Fourth' component={Gear4}/>
                <Stack.Screen name='Gear Fifth' component={Gear5}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
