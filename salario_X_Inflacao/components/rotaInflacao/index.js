import React from "react";
import {ScrollView, SafeAreaView} from 'react-native';
import estiloGlobal from "../../assets/styles/styles";
import ItemValor from "../itemValor";

export default function Salario() {
    return(
        <SafeAreaView>
            <ScrollView>
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />
               <ItemValor estilo={estiloGlobal.odd} ano='Ano' valor='Inflação'/>
               <ItemValor ano='2010' valor='5.91%' />

            </ScrollView>
        </SafeAreaView>
    )
};
