import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Capa from './capa.png'

export default function App() {
  return(
  <View style={estilos.container}>
      <Text style={estilos.titulo}>Guerra do Amanhã</Text>
      <Text style={estilos.descrição}>Genero: Ação e ficção</Text>
      <Image
        source={Capa}
        style={estilos.img}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroudColor: 'magenta',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 40,
    marginBottom: 20,
  },

  descrição: {
    fontSize: 20,
    marginBottom: 20,
  },

  img: {
    width: 350,
    height:350,
  }
});
