import React from 'react';
import {Text, View, Image} from 'react-native';
import estilos from './componentes/estilo';

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

