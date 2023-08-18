import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D4373',
        paddingTop: 10,
    },

    tarja: {
        height: 60,
        backgroundColor: '#032973',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        opacity: 0.6,
        marginBottom: 10,
    },

    textTarja: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '600',
        color: 'white',
        textShadowColor: 'white',
        textShadowRadius: 1,
    },

    img: {
        alignSelf: 'center'        
    },

    card: {
        backgroundColor: '#1E82D9',
        opacity: 0.6,
        margin: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowRadius: 2,
        padding: 10,
    },

    texto: {
        fontSize: 17,
        color: 'white',
        textShadowRadius: 1,
        textShadowColor: 'white',
        textAlign: 'justify',
    },

    containerCard: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    cardEspecif: {
        width: 140,
        height: 140,
        backgroundColor: '#1462A6',
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
    },
    
    textoEspecif: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },

    icon: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },


});


export default styles;
