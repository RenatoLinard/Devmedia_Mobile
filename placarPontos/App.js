import React from "react";
import {View} from 'react-native';
import styles from "./styles";
import CampoJogador from "./components/CampoJogador";



const App =()=> {
    return(
        <View style={styles.container}>

            <View style={styles.containerRotation}>
                <CampoJogador
                     blur={1}
                
                />            
            </View>
             
            <CampoJogador
                blur={1}
            />            


        </View>
    )
}


export default App;
