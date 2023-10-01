import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center" 
    },
    header:{
        fontSize: 22,
        fontWeight:"bold"
    },
    input:{
        height: 40,
        width: 300,
        borderColor: "black",
        borderWidth:2,
        paddingLeft:10,
        margin:5,

        fontSize: 20,
    },
    containerBotoes: {
        flexDirection: "row",
        width: 300,
        justifyContent: "space-between",
        marginTop:3
    }

})

export default estilos