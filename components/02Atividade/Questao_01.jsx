import { Button, TextInput, View, Text } from "react-native"
import { useState } from "react"

const Questao1 = () => {

    const [input1, setInput1] = useState("")
    const [input2, setInput2]= useState("")
    const [frase, setFrase] = useState("")

    const Juntar = () => {
        setFrase(input1 + input2)
    }


    return (
        <View>
            <TextInput
                placeholder="Digite o primeiro nome"
                defaultValue={input1}
                onChangeText={
                    (textoDigitado) => setInput1(textoDigitado)
                }
            />

            <TextInput
                placeholder="Digite o segundo nome"
                defaultValue={input2}
                onChangeText={
                    (textoDigitado) => setInput2(textoDigitado)
                }
            />
            <View>
                <Button
                    title="Juntar"
                    onPress={
                        Juntar
                    }
                />
            </View>

            <Text>
                {frase}
            </Text>

        </View>
    )
}

export default Questao1