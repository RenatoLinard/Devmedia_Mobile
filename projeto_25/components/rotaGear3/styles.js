import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        width: 350,
        height: 550,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        opacity: 0.5,
        padding: 15,
        margin: 20,
    },

    texto:{
        marginBottom: 15,
        fontSize: 30,
        textAlign: 'justify',
        letterSpacing: 1,
        color: 'white',
        textShadowColor: 'white',
        textShadowRadius: 1,
    }

});

export default styles;
