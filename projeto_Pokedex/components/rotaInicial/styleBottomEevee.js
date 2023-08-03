import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
     viewTouch: {
        backgroundColor: '#e28743',
        height: 45,
        width: 355,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 14,
        marginHorizontal: 20,
        paddingHorizontal: 100,
    },

    fontViewTouch: {
        color: 'black',
        fontSize: 30,
    },

    icon: {
        width: 35,
        height: 35,
        marginTop: 3,
    },
});

export default style;
