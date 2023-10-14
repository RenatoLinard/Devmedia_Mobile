import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    geral: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CaixaTexto: {
        marginBottom: 20,
        width: '100%',
        height: 100,
        backgroundColor: '#062c3c',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 10,
    },

    txt1: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },

    botao: {
        width: 110,
        height: 110,
        marginBottom: 20,
    },

    circle: {
        width: 180,
        height: 180,
        borderRadius: 100,
        backgroundColor: '#2abac1',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'black',
    },

    txtCircle: {
        fontSize: 75,
        color: 'white',
    },

});

export default styles;
