import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 120,
    },

    texto: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 30,
    },

    viewTouch: {
        backgroundColor: 'lightgreen',
        height: 45,
        width: 180,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 30,
        
    },

    fontViewTouch: {
        color: 'white',
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold',
    },

    icon: {
        width: 17,
        height: 17,
        marginTop: 12,
    },
});

export default styles;
