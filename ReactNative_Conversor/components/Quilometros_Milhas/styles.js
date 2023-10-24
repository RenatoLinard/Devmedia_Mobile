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
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 22,
        color: 'white',
        textShadowColor: 'white',
        textShadowRadius: 1,
    },

    button : {
        width: 120,
        height: 40,
        borderColor:'black',
        borderWidth:1,
        borderRadius:8,
        backgroundColor:'lightgreen',
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    align_Botton_Txt: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',

    },

    txt_Input: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
    },

    number_second_box: {
        fontSize: 120,
        color: 'black',
        textShadowColor: 'black',
        textShadowRadius: 1,
    },

    txt_second_box: {
        fontSize: 30,
        color: 'black',
        textShadowColor: 'black',
        textShadowRadius: 1,
    }
});

export default styles;
