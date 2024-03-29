import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

const MyTextInput = () => {

    const [frase, setFrase] = useState('')

    return(
        <View style={estilos.view}>
            <Text style={estilos.header} >Tradutor Emoji</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Digite uma frase"
                defaultValue={frase}
                onChangeText={(textoDigitado) => setFrase(textoDigitado) }

            />
            <Text style={estilos.frase} >
                {
                frase
                .split(" ")   // se palavra existe
                .map((palavra) => palavra && "🤣" )
                .join(" ")  //join por padrao coloca virgula
                }
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        header:{
            fontSize: 60,
            fontWeight: 'bold',
            paddingBottom: 40
        },
        view:{
            alignItems: 'center',
            flex:1,
            padding:20,
            backgroundColor: "#C0C0C0"
        },
        input: {
            height:100,
            width: 600,
            paddingLeft:10,
            borderColor:"black",
            borderWidth: 2,
            fontSize:60,
            fontWeight: 'bold',
        },
        frase: {
            fontSize: 40,
            paddingTop: 40
        }
    }
)

export default MyTextInput