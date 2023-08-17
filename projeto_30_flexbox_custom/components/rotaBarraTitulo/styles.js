import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#262527',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 35,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        opacity: 0.9,
    },

    imgBarratitulo: {
   
      width: 70,
      height: 70,
      borderRadius: 35,
      borderColor: '#fff',
      borderWidth: 2,
      marginRight: 15,
    },

    titulo: {
        fontWeight: "700",
        fontSize: 20,
        color: '#D9C6BA',
        textShadowRadius: 1,
        textShadowColor: '#D9C6BA',
    },

    subtitulo: {
        color: '#D9C6BA',
        fontSize: 15,
        textShadowColor: '#D9C6BA',
        textShadowRadius: 1,
    }
});


export default styles;
