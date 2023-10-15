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
    containerOnFocus: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 30,
        width: 300,
        height: 50,
        backgroundColor: '#2E84A6',
        borderColor: '#A62152',
        borderWidth: 3,
        borderRadius: 8,
    },

    txtOnFocus: {
        color: 'white',
        fontSize: 20,
        textShadowRadius: 1,
        textShadowColor: 'white',
    },

    containerOffFocus: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 30,
        width: 300,
        height: 50,
        backgroundColor: '#A6A6A6',
        borderColor: '#8C8C8C',
        borderWidth: 3,
        borderRadius: 8,
    },

    txtOffFocus: {
        color: '#BFBFBF',
        fontSize: 20,
        textShadowRadius: 1,
        textShadowColor: '#BFBFBF',
    },

});

export default styles;
