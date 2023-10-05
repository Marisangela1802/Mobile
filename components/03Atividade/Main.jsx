import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home/Home";
import Cadastro from "./Cadastro/Cadastro";
import Perfil from "./Cadastro/Perfil";
import IMC from "./IMC/IMC";
import Resultado from "./IMC/Resultado";
import Sobre from "./Sobre/Sobre";

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="IMC" component={IMC} />
                <Stack.Screen name="Resultado" component={Resultado} />
                <Stack.Screen name="Sobre" component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main