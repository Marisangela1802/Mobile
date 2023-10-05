import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

const Cadastro = ({navigation}) => {

    const [Nome, SetNome] = useState ("")
    const [Idade, SetIdade] = useState ("")
    const [Email, SetEmail] = useState ("")

    return(
        <View>
            <Text>Cadastro</Text>
            
            <TextInput 
                placeholder="Nome"
                defaultValue={Nome}
                onChangeText={(textodigitado)=>SetNome(textodigitado)}
            />
            <TextInput 
                placeholder="Idade"
                defaultValue={Idade}
                onChangeText={(idadedigitada)=>SetIdade(idadedigitada)}
            />
            <TextInput 
                placeholder="Email"
                defaultValue={Email}
                onChangeText={(emaildigitado)=>SetEmail(emaildigitado)}
            />
            <Button
                title="OK"
                onPress={()=>navigation.navigate("Perfil", {Nome,Idade,Email})}
            />

        </View>
    )
}

export default Cadastro