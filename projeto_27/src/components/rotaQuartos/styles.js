import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f54263',
        alignItems: 'center',
    },

    boximg: {
        flexDirection: 'row',
    },

    img: {
        width: 180,
        marginTop: 20,
        marginHorizontal: 5,
        height: 320,
        borderRadius: 20,
        marginBottom: 40,
    },

    titulo: {
        fontSize: 35,
        color: 'yellow',
        fontWeight: '600',
        marginTop: 20,
    },

    subtitulo: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 23, 
        marginBottom:20,
    },


    texto: {
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 17, 
    }

    
});

export default styles;
