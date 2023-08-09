import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 35,
        color: '#F2DAAC',
        fontStyle: 'italic',
        textShadowColor: '#BF9056',
        textShadowRadius: 1,
        textAlign: 'center',
    },

    box: {
        width: 350,
        height: 300,
        backgroundColor: '#402110',
        opacity: 0.6,
        borderColor: '#F2DAAC',
        borderWidth: 2,
        borderRadius: 20,
    },


    texto: {
        fontSize: 25,
        color: '#F2DAAC',
        fontStyle: 'italic',
        textShadowColor: '#F2DAAC',
        textShadowRadius: 1,
        textAlign: 'justify',
        margin: 17,

    },
})

export default styles;
