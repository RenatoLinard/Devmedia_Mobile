import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    box: {
        width: 250,
        height: 200,
        backgroundColor: '#f54263',
        borderColor: 'white',
        padding: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
    },


    titulo: {
        fontSize: 30,
        color: 'yellow',
        marginBottom: 15,

    },

    texto: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    }
});

export default styles;
