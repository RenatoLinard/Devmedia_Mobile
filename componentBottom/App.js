import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Bottom from './Src/Bottom';



const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bottom" component={Bottom}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
};
