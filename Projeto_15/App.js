import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./components/Home";
import Pokemon_1 from "./components/Pokemon_1";
import Pokemon_2 from "./components/Pokemon_2";
import Pokemon_3 from "./components/Pokemon_3";
const Drawer = createDrawerNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Pokemon 1" component={Pokemon_1}/>
                <Drawer.Screen name="Pokemon 2" component={Pokemon_2}/>
                <Drawer.Screen name="Pokemon 3" component={Pokemon_3}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
};
