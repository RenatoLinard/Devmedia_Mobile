import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BDBEBF',
        padding: 40,
    },

    card: {
        flex: 1,
        backgroundColor: '#212226',
        borderColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
        opacity: 0.8,
        width: 380,
    },

    logo: {
        width: 100,
        height: 100,
    }
});

export default styles;
