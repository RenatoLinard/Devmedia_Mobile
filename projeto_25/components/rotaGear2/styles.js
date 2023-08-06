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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        opacity: 0.5,
        padding: 15,
        margin: 20,
    },

    texto:{
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        textShadowColor: 'black',
        fontStyle: 'italic',
        fontWeight: '500',
        textShadowRadius: 2,
    }
});

export default styles;
