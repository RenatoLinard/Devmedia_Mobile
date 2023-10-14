import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    geral: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#062c3c',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
    },

    txt1: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },

    box: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center'
    },

    txtBox: {
        borderWidth: 3,
        borderColor: '#d5d5d5',
        borderRadius: 20,
        width: 200,
        height: 50,
        paddingHorizontal: 5,
    },

    botao: {
        width: 110,
        height: 110,
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

    txtInput: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 3,
    },
});

export default styles;
