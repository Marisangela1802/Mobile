import { View, Text } from "react-native";

const Resultado = ({route}) => {
    
    return(
        <View>
            <Text>Resultado</Text>
            {route.params?.CalcularIMC}
            <Text>{route.params?.resultado}</Text>
        </View>
    )
}

export default Resultado