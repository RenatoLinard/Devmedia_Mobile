import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    titulo: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing:2,
    },

    img: {
        marginTop: 20,
        width: 350,
        height: 200,
        marginBottom: 20,
    },

    descrição: {
        fontSize: 17,
        fontStyle: 'italic',
        textAlign: 'justify',
    },

    container: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
    }
})

export default style;
