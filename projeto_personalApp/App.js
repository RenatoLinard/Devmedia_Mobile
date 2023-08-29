import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Inicial from "./components/rotaInicial";


const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <View style={{flex: 1}}>
            <Inicial/>
        </View>
    )
};
