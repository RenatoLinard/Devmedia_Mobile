import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";


const BoxOnFocus = (props) => {

    const [OnFocus, setOnFocus] = useState('');


    return(
        <View>
        <View style={OnFocus==='txt_min'?styles.containerOnFocus:styles.containerOffFocus}>
            <Text style={OnFocus === 'txt_min'? styles.txtOnFocus:styles.txtOffFocus}> Valor Mínimo: </Text>
            <TextInput
                onFocus={() => setOnFocus('txt_min')}
                onBlur={() => setOnFocus('')}
                keyboardType="number-pad"
                autoFocus= {true}
                textAlign="center"
                cursorColor={'#A62152'}
                style={styles.txtOnFocus}
            />
        </View>

        <View style={OnFocus==='txt_max'?styles.containerOnFocus:styles.containerOffFocus}>
            <Text style={OnFocus==='txt_max'?styles.txtOnFocus:styles.txtOffFocus}> Valor Máximo: </Text>
            <TextInput
                onFocus={()=>setOnFocus('txt_max')}
                onBlur={()=>setOnFocus('')}
                keyboardType="number-pad"
                textAlign="center"
                cursorColor={'#A62152'}
                style={styles.txtOnFocus}
            />
        </View>

        </View>
    )
}

export default BoxOnFocus;
