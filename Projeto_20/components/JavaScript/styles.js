import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'yellow',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
    },

    texto: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 41,
    },

    img: {
        width: 50,
        height: 50,
    },

    boxBotoes: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around"
    },
});

export default styles;
