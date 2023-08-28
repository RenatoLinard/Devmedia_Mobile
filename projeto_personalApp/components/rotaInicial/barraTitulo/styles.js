import {StyleSheet} from "react-native";



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#395273',
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 30,
    },
    img: {
        height: 130,
        width: 250,
    },

    texto: {
        color: '#F2F2F2',
        fontSize: 28,
        textAlign: 'center',
        letterSpacing: 4,
        fontStyle: 'italic'
    },

    subtexto: {
        marginTop: 40,
        color: '#F2F2F2',
        fontSize: 20,
        marginHorizontal: 30,
        fontStyle: 'italic'
    }
});


export default styles;
