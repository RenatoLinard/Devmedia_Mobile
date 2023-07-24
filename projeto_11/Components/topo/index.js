import React from 'react';
import {View, Text, Image} from 'react-native';
import nintendo from '../../assets/nintendo.png';
import style from './style';

export default function Topo (){
    return (
        <View style={style.container}>
            <Image source={nintendo} style={style.img} />

            <Text style={style.titulo}>Nintendo Switch</Text>
        </View>
    );
}





