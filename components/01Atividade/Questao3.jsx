import { View, Text } from "react-native"


const Questao3 = ({cor}) => {
    return (
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}} >Disciplinas Favoritas</Text>
            <Text style={{color:cor}} >Fundamentos de Programação</Text>
            <Text style={{color:cor}} >Linguagem de Marcação e Scripts</Text>
            <Text style={{color:cor}} >Programação para Web</Text>
            <Text style={{color:cor}} >Direção de Arte</Text>

        </View>
    )
}

export default Questao3