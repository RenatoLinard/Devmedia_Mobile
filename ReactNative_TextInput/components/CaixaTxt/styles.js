import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    containerOnFocus: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 30,
        width: 300,
        height: 50,
        backgroundColor: '#2E84A6',
        borderColor: '#A62152',
        borderWidth: 3,
        borderRadius: 8,
    },

    txtOnFocus: {
        color: 'white',
        fontSize: 20,
        textShadowRadius: 1,
        textShadowColor: 'white',
    },

    containerOffFocus: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 30,
        width: 300,
        height: 50,
        backgroundColor: '#A6A6A6',
        borderColor: '#8C8C8C',
        borderWidth: 3,
        borderRadius: 8,
    },

    txtOffFocus: {
        color: '#BFBFBF',
        fontSize: 20,
        textShadowRadius: 1,
        textShadowColor: '#BFBFBF',
    },
    

});

export default styles;
