import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'red',
        width: 390,
    },

     viewTouch: {
        backgroundColor: 'yellow',
        height: 45,
        width: 355,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 14,
        marginHorizontal: 20,
        marginTop: 4,
        paddingHorizontal:100,
    },

    fontViewTouch: {
        color: 'black',
        fontSize: 30,
    },

    icon: {
        width: 35,
        height: 35,
        marginTop: 3,
    },

    imgTitulo: {
        width: 300,
        height: 110,
        marginHorizontal: 40
    },

    texto: {
        fontSize: 25,
        textAlign: 'center',
        margin: 15,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    imgPrinc: {
        width: '100%',
        height: 265,
        borderRadius: 10,
    }
});

export default styles;
