import React from 'react';
import {View, ScrollView} from 'react-native';
import ItemLista from '../itemLista';
import Titulo from '../titulo';
import styles from './styles';



export default function ListaSignos(){
    return(
        <View>
            <Titulo/>

            <ScrollView style={styles.lista}>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='21/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='22/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='22/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='22/01' dataFim='19/02'/>
                <ItemLista signo='Aquário' dataInicio='22/01' dataFim='19/02'/>

            </ScrollView>
        </View>
    )
};

