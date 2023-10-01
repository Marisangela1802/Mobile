import { View, Text, FlatList } from "react-native";

// const dados = [
//     { key: 1, nome: "João", nota: 8.9 },
//     { key: 2, nome: "Paula", nota: 9.1 },
//     { key: 3, nome: "Marta", nota: 7.9 },
// ]

const dados = [
    {nome:"Fulano", nota: 10}
]

const MyFlatList = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 20
            }}
        >

            <FlatList
                data={dados}
                renderItem={
                    ({item})=>{
                        return(
                            <View>
                                <Text style={{fontSize:25, fontWeight:"bold"}}>
                                    {item.nome} - {item.nota}
                                </Text>
                            </View>
                        )
                    }
                }
                //Se voce quer pegar dados de um objeto que não tem chave ---- usar o keyExtractor
                keyExtractor={
                    (elemento)=>{
                        return elemento.nome + elemento
                    }
                }
            />

        </View>
    )

}

export default MyFlatList
