import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBEBF',
    },

    barraTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F6673',
        height: 250,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
    },

    logo: {
        width: 300,
        height: 300,
    },

    cards: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    img: {
        marginTop: 130,
        width: 270,
        height: 270,
    }
});

export default styles;
