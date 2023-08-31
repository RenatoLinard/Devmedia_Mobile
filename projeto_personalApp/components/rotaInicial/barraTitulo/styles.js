import {StyleSheet} from "react-native";



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3e5c76',
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 30,
    },
    img: {
        marginTop: 30,
        height: 130,
        width: 250,
    },

    texto: {
        marginTop: -20,
        color: '#F2F2F2',
        fontSize: 28,
        textAlign: 'center',
        letterSpacing: 4,
        fontStyle: 'italic'
    },

    subtexto: {
        marginTop: 30,
        marginBottom: 10,
        color: '#F2F2F2',
        fontSize: 20,
        marginHorizontal: 30,
        fontStyle: 'italic'
    }
});


export default styles;
