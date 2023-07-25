import {StyleSheet} from 'react-native';



const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#19334C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    card: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 20,
        
    },

    titulo: {
        fontSize: 30,
        fontStyle: 'italic',
        marginBottom: 10,
        marginTop: 10,
    },

    descrição: {
        fontSize: 15,
        marginBottom: 20,
    },

    img: {
        width: 310,
        height: 230,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        
    },
});



export default estilo;
