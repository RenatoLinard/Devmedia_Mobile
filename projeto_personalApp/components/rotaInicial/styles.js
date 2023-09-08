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

    buttom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 70,
    },

    img: {
        width: 260,
        height: 260,
    },

});

export default styles;
