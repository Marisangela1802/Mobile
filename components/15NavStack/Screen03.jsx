import { View, Text, Button } from "react-native"
import myStyle from "./MyStyle"


const ScreenO3 = ({navigation}) => {
    return(
        <View style={myStyle.container} >
            <Text style={myStyle.header} >Screen03</Text>
            <Button 
                title="Desempilhar Tudo"
                onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}

export default ScreenO3