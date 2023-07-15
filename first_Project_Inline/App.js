import React from 'react';
import {View, Text, Image} from 'react-native';

export default function App() {
  return(
    <View style={{backgroundColor:'lightblue', 
                  flex:1, 
                  justifyContent:'center', 
                  alignItems:'center' }}>
      
      <Text style={{fontSize:30, 
                    marginBottom:20,}}>Hello World!!!
      </Text>

      <Image
        source={{uri:'https://arquivo.devmedia.com.br/marketing/img/logo-devmedia.png'}}
        style={{width:150, height:150}}
      />

      <Text style={{marginTop:20, fontSize:20}}>Devmedia</Text>

    </View>
  );
  }
