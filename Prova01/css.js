import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        padding:15
    },
    header:{
        fontSize:20,
        fontWeight:"bold",
        color:"gray"
    },
    texto:{
        fontSize:20,
        color:"white",
    },
    horario:{
        fontSize:15,
        color:"white"
    },
    caixa1:{
        paddingTop:10,
        paddingBottom:10,
    },
    caixa2:{
        flexDirection: "row", 
        flex: 1,
    },
    caixa3:{
        flex: 1, 
        width: 100, 
        height: 20 
    },
    caixa4:{
        flex: 2, 
        width: 300, 
        flexDirection:"row" 
    }

})

export default estilo