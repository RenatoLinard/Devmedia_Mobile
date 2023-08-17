import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        justifyContent: 'space-around',
    },

    card: {
        width: 150,
        height: 150,
        backgroundColor: '#262526',
        borderRadius: 20,
        opacity: 0.6,
        marginBottom: 20,
    }
});


export default styles;
