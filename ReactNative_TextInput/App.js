import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Titulo from './components/Titulo';
import TelaInicial from './components/TelaInicial';



const App = () => {
    return(
        <View style={styles.container}>
            <Titulo/>
            <TelaInicial/>
        </View>
    )
}

export default App;
