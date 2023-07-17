import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        Hello World!!!
      </Text>
      <Image
        source={{uri:'https://arquivo.devmedia.com.br/marketing/img/logo-devmedia.png'}}
        style={estilos.img}
      />
      <Text style={estilos.texto}>Devmedia</Text>
    </View>
  );

}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize: 30,
  },

  container: {
    backgroundColor: 'lightblue',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 150,
  }


});
