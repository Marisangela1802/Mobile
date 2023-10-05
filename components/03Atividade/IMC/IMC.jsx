import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const IMC = ({navigation}) => {
    
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [resultado, setResultado] = useState("")

    const CalcularIMC = () => {
        setResultado(parseInt(peso) * parseInt(altura))
        
    }

    return(
        <View>
            <Text>IMC</Text>
            <TextInput
                placeholder="Peso"
                defaultValue={parseInt(peso)}
                onChangeText={(pesodigitado)=>setPeso(pesodigitado)}
            />
            <TextInput
                placeholder="Altura"
                defaultValue={parseInt(altura)}
                onChangeText={(alturadigitado)=>setAltura(alturadigitado)}
            />
            <Button
                title="OK"
                onPress={()=>navigation.navigate("Resultado")}
            />
            <Button
                title="Calcular"
                onPress={CalcularIMC}
            />
            <Text>{parseInt(resultado)}</Text>
        </View>
    )
}

export default IMC