import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import Titulo from './components/Titulo';
import TelaInicial from './components/TelaInicial';


const App = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Titulo/>
            <TelaInicial/>
        </SafeAreaView>
    )
}

export default App;
