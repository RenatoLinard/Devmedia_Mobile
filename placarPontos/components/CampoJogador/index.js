import React, {useState} from "react";
import { ImageBackground, Pressable, Image, View, Text} from "react-native";
import styles from "./styles";
import button from '../../assets/button.png';
import img1 from '../../assets/imgAbstract.jpg';
import img3 from '../../assets/img1.jpg';
import mais from '../../assets/mais.png';
import menos from '../../assets/sinal-de-menos.png';
import reload from '../../assets/recarregar.png'




const CampoJogador = props => {
       const [ChangeImg, setChangeImg] = useState(true) 
       const [IncreaseNumber, setIncreaseNumber] = useState(0)

    return(

        <ImageBackground
            blurRadius={props.blur}
            style={styles.container}
            source={
                ChangeImg?img1:img3
            }
        >    

            <Pressable
                style={styles.Press}
                onPress={() => {
                    setChangeImg(!ChangeImg)
                }}
            >
                <Image
                    source={button}
                    style={styles.button}
                />
            </Pressable>

            <View style={styles.Cp}>
                
            
            <Pressable style={{alignSelf: 'center'}}
                onPress={() => {
                    setIncreaseNumber(IncreaseNumber - 1)
                }}
            >
                <Image
                    source={menos}
                    style={styles.plus_minus}
                />
            </Pressable>

               <Text style={styles.Number}> {IncreaseNumber} </Text> 
                

            <Pressable style={{alignSelf: 'center'}}
                onPress={() => {
                    setIncreaseNumber(IncreaseNumber + 1)
                }}
            >
                <Image
                    source={mais}
                    style={styles.plus_minus}
                />
            </Pressable>


            </View>

            <Pressable style={styles.positionReload}
                onPress={() => {
                    setIncreaseNumber(0)
                }}
            >
                <Image
                    source={reload}
                    style={styles.reload}
                />
            </Pressable>
        </ImageBackground>
           

    )
}

export default CampoJogador;
