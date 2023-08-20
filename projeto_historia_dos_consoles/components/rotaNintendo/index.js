import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import nintendo from '../../assets/nintendo.jpg';
import cpu from '../../assets/cpu.png';
import gpu from '../../assets/gpu.png';
import ram from '../../assets/ram.png';
import hd from '../../assets/hd.png';

export default function Nintendo() {
    return(
           
          <ScrollView style={styles.container}>
             <View style={styles.tarja}>
                  <Text style={styles.textTarja}> Historia do Nintendo </Text>
             </View>
            
             <Image
                 source={nintendo}
                 style={styles.img}
             />

            <View style={styles.card}>
                <Text style={styles.texto}> O primeiro Xbox chegou em 2001
                        para competir com o PSOne,
                        que já estava no mercado desde 1995, e o recém chegado
                        PlayStation 2, lançado no ano 2000. Além da Sony,
                        a Microsoft também estava de olho no mercado
                        conquistado pela Nintendo e seu Gamecube. </Text>                
                <Text style={styles.texto}> Desde seu surgimento, ainda na era
                    dos CDs, até os poderosos Series X e S, o Xbox se firmou
                    como umas das centrais de entretenimento mais importantes
                    da indústria, agregando à marca serviços de sucesso,
                    como o Xbox Game Pass, e dezenas de estúdios. </Text>
                <Text style={styles.texto}> {'\n'}Que tal voltar no tempo e conhecer
                    as versões, acessórios e alguns jogos marcantes da história
                    do Xbox? Vamos lá! </Text>
                <Text style={styles.texto}> {'\n'}Antes da chegada do primeiro Xbox,
                    em novembro de 2001, a Microsoft já tinha seus olhos
                    voltados para games publicando, inclusive, alguns títulos
                    para PC, como Flight Simulator e Age of Empires. </Text>
                <Text style={styles.texto}> {'\n'}No entanto, a empresa percebeu
                    que se quisesse realmente ser bem sucedida nesse mercado
                    alguns upgrades seriam necessários. A Sony já estava
                    cultivando uma boa popularidade com o PlayStation e
                    já começava a trabalhar no PS2.</Text>
                <Text style={styles.texto}> Com a concorrência crescendo e os
                    videogames se tornando uma força real no mercado,
                    a Microsoft decidiu que também queria uma fatia desse bolo.
                    E assim surgiu o primeiro Xbox, com 64 MB de RAM e 8 GB
                    de armazenamento.</Text>
                

            </View>
            
            <View style={styles.tarja}>
                <Text style={styles.textTarja}> Espificações Tecnicas</Text>
            </View>
            
                <Text style={styles.textoEspecif}> Conheça as especificações 
                    tecnicas do Xbox de 2001</Text>                

            <View style={styles.containerCard}>

                <View style={styles.cardEspecif}>
                    <Image
                    source={cpu}
                    style={styles.icon}
                    />
                    <Text style={styles.textoEspecif}> CPU: x86-64 AMD</Text>
                </View>

                <View style={styles.cardEspecif}>
                    <Image
                        source={gpu}
                        style={styles.icon}
                    />
                    <Text style={styles.textoEspecif}> GPU: 1,84 TFLOPS Radeon™</Text>
                </View>
        
                <View style={styles.cardEspecif}>
                    <Image
                        source={ram}
                        style={styles.icon}
                    />
                    <Text style={styles.textoEspecif}>GDDR5 8 GB</Text>

                </View>

                <View style={styles.cardEspecif}>
                    <Image
                        source={hd}
                        style={styles.icon}
                    />
                    <Text style={styles.textoEspecif}>HD interno 500 GB, 1 TB</Text>

                </View>
            </View>

        </ScrollView>

    )
};
