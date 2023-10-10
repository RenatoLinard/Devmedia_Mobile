import React from "react";
import {View, Text} from 'react-native';

//If else sintaxe padrão
const test = (limite, valor) => {
    if(limite >= valor){
        return(<Text> Compra aprovada - If padrão </Text>)
    }else{
        return(<Text> Compra negada - if padrão </Text>)
    }
}

//If else ternario
const test2 = (limite, valor) => {
    (limite>=valor)?<Text>hello</Text>:<Text>hello</Text>
}

const CP1 = () => {
    return(
        <View>
            {test(50, 10)}
            {test2(5, 10)}
        </View>
    )
}

export default CP1;

