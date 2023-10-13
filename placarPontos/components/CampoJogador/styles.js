import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex:1,
    },


    button: {
        width: 30,
        height: 30,
    },

    Press: {
        top: 400,
        left: 400,
    },

    Cp: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 50,
    },

    Number: {
        marginHorizontal: 30,
        fontSize: 170,
        color: 'white',
        marginBottom: 30,
        textShadowColor: 'black',
        textShadowRadius: 5,
    },

    plus_minus: {
        height: 60,
        width: 60,
    },

    reload: {
        height: 60,
        width: 60,
    },

    positionReload: {
        alignSelf: 'center',
        marginTop: 50,
    }


    
});

export default styles;



