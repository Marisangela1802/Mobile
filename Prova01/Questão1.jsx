import { View, Text, SectionList } from "react-native";

import dados from "./Objeto";
import estilo from "./css";

const Questao1 = () => {
    return (
        <View style={estilo.container} >
            <SectionList
                sections={dados}
                keyExtractor={(item) => "key" + item}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={ estilo.caixa2 } >
                                <View style={estilo.caixa3} >
                                    <Text style={estilo.texto} >
                                        {item.icone}

                                    </Text>
                                </View>
                                <View style={estilo.caixa4} >
                                    <View style={{flex:1}} >
                                        <Text style={estilo.texto}>
                                            {item.nome}
                                            
                                        </Text>
                                        <Text style={estilo.horario}>
                                        {item.horario}
                                    </Text>
                                    </View>
                                        <Text style={estilo.texto}>
                                            {item.valor}
                                        </Text>



                                    
                                </View>
                            </View>

                        )
                    }
                }
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <View style={estilo.caixa1} >
                                <Text style={estilo.header} >
                                    {section.title}
                                </Text>
                            </View>
                        )
                    }
                }


            />
        </View>
    )
}

export default Questao1