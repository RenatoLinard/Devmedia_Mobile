import React from "react";
import {View} from 'react-native';
import styles from "./styles";
import CP1 from "./components/if_else";
import CP2 from "./components/props";


const App = () => {
    return(
        <View style={styles.container}>
            <CP1/>
            <CP2 txt='Esse é um texto via props'/>
        </View>
    )
}

export default App;
