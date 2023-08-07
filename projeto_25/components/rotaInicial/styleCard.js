import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 250,
        opacity: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
    },

    boxContainer: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#19344e',
        opacity: 0.7,
        borderWidth: 1,
        borderColor: 'white',
    },

    icon: {
        width: 40,
        height: 40,
    },

    textcard: {
        color: 'white',
        fontSize: 27,
        fontStyle: 'italic',
        textShadowColor: '#54a1d9',
        textShadowRadius: 20,
     }

});

export default styles;
