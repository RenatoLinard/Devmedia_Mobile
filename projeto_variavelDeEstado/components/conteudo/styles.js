import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
    },

    txt1: {
        textAlign: 'center',
        fontSize: 15,
    },

    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00a5ac',
        height: 125,
        width: 125,
        borderRadius: 65,
        marginVertical: 40,
    },

    buttom: {
        backgroundColor: '#1c4c55',
        height: 35,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    number: {
        color: 'white',
        fontSize: 60,
    },

    txt2:{
        color: 'white',
        fontSize: 20,
    }
});

export default styles;
