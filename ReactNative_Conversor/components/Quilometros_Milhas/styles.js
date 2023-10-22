import {StyleSheet} from 'react-native';


const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    first_box: {
        height: 200,
        width: '90%',
        backgroundColor: 'gray',
        opacity: 0.7,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    second_box: {
        height: 350,
        width: '90%',
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: 16,
    },

    titulo: {
        fontSize: 22,
        color: 'white',
        textShadowColor: 'white',
        textShadowRadius: 1,
    },

    button : {
        width: 50,
        height: 50,
    }
});

export default styles;
