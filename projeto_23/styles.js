import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    container: {
        flex:1,
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    card: {
        backgroundColor: 'white',
        width: 301,
        height: 400,
        opacity: 0.6,
        borderRadius: 20,
    },

    titulo: {
        fontSize: 40,
        color: 'black',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },

    paragrafo: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
    }

});

export default styles;
