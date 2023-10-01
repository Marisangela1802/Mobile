import { View, Text, SectionList, StyleSheet } from "react-native";

const dados = [
    {
        title: "J", data: [
            { nome: "Jonas" },
            { nome: "Joao" }
        ]
    },
    {
        title: "E", data: [
            { nome: "Elano" },
            { nome: "Eustaquio" }
        ]
    },
]

const MySectionList = () => {
    return (
        <View style={estilos.container} >
            <SectionList
                sections={dados}
                keyExtractor={(item)=>"sddddsdsds" + item}
                renderItem={
                    ({item})=>{
                        return(
                            <Text style={{fontSize:25}}>
                                {item.nome}
                            </Text>
                        )
                    }
                }
                renderSectionHeader={
                    ({section})=>{
                        return(
                            <Text style={{fontSize:25, fontWeight:"bold"}} >
                                {section.title}
                            </Text>
                        )
                    }
                }
            />
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25
    },
})

//oi

export default MySectionList