import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BFBBB4',
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    card: {
        flex: 1,
        backgroundColor: '#403E3B',
        borderColor: '#012606',
        borderRadius: 30,
        borderWidth: 2,
        opacity: 0.9,
        alignItems: 'center',
    },

    logo: {
        marginVertical: -50,
        width: 500,
        height: 300,
    },

    icons: {
        width: 25,
        height: 25,
        marginRight: 10,
    },

    buttom: {
        flexDirection: 'row',
        width: 300,
        height: 50,
        borderColor: '#BFBBB4',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },

    text: {
        color: '#BFBBB4',
        marginBottom: 30,
        
    },

    text_destaque: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text_destaque2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginVertical: 50,
    },

    buttom_enter: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#ff6f00',
    },

});

export default styles;
