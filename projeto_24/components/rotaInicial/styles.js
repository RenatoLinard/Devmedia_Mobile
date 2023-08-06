import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },

    card: {
        width: 300,
        height: 270,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
        textShadowRadius: 10,
        textShadowColor: 'red',
    },

    icons:{
        marginTop: 25,
        width: 150,
        height: 150,
    }
});

export default styles;
