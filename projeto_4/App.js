import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import congo from './assets/floresta-congo.png'
import amazonica from './assets/floresta-amazonica.png'
import taiga from './assets/floresta-taiga.png'




export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Florestas pelo mundo</Text>

      <Image source={congo} style={estilos.img}/>
      <Text style={estilos.legenda}>Floresta do congo (Africa)</Text>

      <Image
        source={taiga} style={estilos.img}/>
      <Text style={estilos.legenda}>Floresta (Hemisfério norte)</Text>

      <Image
        source={amazonica} style={estilos.img}/>
      <Text style={estilos.legenda}>Floresta amazonica (America do sul)</Text>
    </View>
  );
}




const estilos= StyleSheet.create({
  titulo: {
    fontSize: 40,
    marginTop: 60,
    marginBottom: 20,
  },

  img: {
    height: 180,
    width: 360,
  },

  container: {
    backgroundColor: 'lightgray',
    flex:1,
    alignItems: 'center',

  },

  legenda: {
    marginBottom: 30,
    fontSize: 20,
  }
});
