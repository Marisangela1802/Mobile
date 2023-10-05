import { View, Text, Button } from "react-native";

const Sobre = ({navigation}) => {
    return(
        <View>
            <Text>Sobre</Text>
            <Text>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Text>
            <Button
                title="Home"
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    )
}

export default Sobre