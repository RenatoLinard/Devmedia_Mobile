import React from 'react';
import {View, Text, Image} from 'react-native';

export default function App() {
    return(
        <View style={{backgroundColor:'orange', flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image style={{marginTop:20, marginBottom:20, width:150, height:150}}
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1VGtZitgx4jl_X8XS0cHQh-Lk7qNhQwXa5dpEZQ&s'
                }}
            />
            
            <Text style={{marginTop:20, textAlign:'center'}}>
                Queen foi uma banda britânica de rock, fundada em 1970 e ativa, sob sua formação clássica, até 1991. O grupo, formado por Brian May (guitarra e vocais), Freddie Mercury (vocais e piano), John Deacon (baixo) e Roger Taylor (bateria e vocais) é frequentemente citado como um dos expoentes do seu estilo, também sendo um dos recordistas de vendas de discos a nível mundial. A música da banda também é conhecida por ser altamente eclética, variando entre várias vertentes do rock. 
            </Text>
        </View>
    );
}
