
import { View, Text, Image, Button } from "react-native";


const Perfil = ({route,navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Perfil</Text>
            <Image
                source={{uri:"https://cdn.ome.lt/f-WjxTTes8NREOwj14EE685J4iY=/1200x630/smart/extras/conteudos/soul3.jpg"}}
                style={{width:300, height:150, alignSelf:"center"}}
            />
            <Text>{route.params?.Nome}</Text>
            <Text>{route.params?.Idade}</Text>
            <Text>{route.params?.Email}</Text>

            <Button
                title="Home"
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    )
}

export default Perfil