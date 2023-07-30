import React from "./components/React";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Node from './components/Node';
import TelaReact from "./components/React";
import JavaScript from "./components/JavaScript";



const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="JavaScript" component={JavaScript}/>
                <Stack.Screen name="Node" component={Node}/>
                <Stack.Screen name="TelaReact" component={TelaReact}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

