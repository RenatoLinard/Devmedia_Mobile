import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5e9188',
        alignItems: 'center',
        paddingTop: 35,
    },

    barraTitulo: {
        width: 420,
        height: 350,
    },

    cards: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    img: {
        width: 220,
        height: 220,
    }
});

export default styles;
