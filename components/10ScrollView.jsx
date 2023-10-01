import { View, Text, Image, ScrollView } from "react-native";

const Imagem = {
    uri: "https://i.pinimg.com/1200x/e8/06/b7/e806b7d25fe01b3186fcc961c1d53ad7.jpg",
    width: 240,
    height: 240
}

const MyScrollView = () => {
    return(
        //ScrollView não aceita estilo
        <ScrollView>
            <View
                 style={{
                    flex:1,
                    justifyContent:"flex-start",
                    alignItems:"center",
                    marginTop: 10
                }}
            >
                <Text style={{fontSize:25, fontWeight:"bold", color:"cian"}} >Olaf</Text>
                <Image source={Imagem}/>
                <Image source={Imagem}/>
                <Image source={Imagem}/>
                <Image source={Imagem}/>
                <Image source={Imagem}/>

            </View>

        </ScrollView>
    )
}

export default MyScrollView