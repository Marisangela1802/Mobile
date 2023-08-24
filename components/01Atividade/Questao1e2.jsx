import { useState } from "react"
import { Button } from "react-native"
import { View, Text, Image } from "react-native"



const Questao1 = () => {

    const [imagem, setImagem] = useState("https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png")

    const mudarImagem = () => {
        if(imagem == "https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png") {
            setImagem("https://w7.pngwing.com/pngs/349/681/png-transparent-disney-frozen-olaf-illustration-elsa-kristoff-olaf-anna-youtube-olaf-child-cartoon-kristoff-thumbnail.png")
        } else {
            setImagem("https://upload.wikimedia.org/wikipedia/pt/d/d2/Olaf.png")
        }
    }

    return(
        <View>
            <Image
                source={{uri:imagem}}
                style={{width:200, height:250, justifyContent:"center", alignItems:"center"}}
            />
            <Text style={{fontSize: 18, fontWeight: "bold"}} >Nome: Marisangela de Sousa Lima</Text>
            <Text style={{fontSize: 15}} >Cidade: Trairi</Text>
            <Text style={{fontSize: 15}} >Curso: Design Digital / 6° semestre</Text>
            
            <Button
                title="Mudar Imagem"
                onPress={
                    mudarImagem
                }
            />

        </View>
    )
}

export default Questao1