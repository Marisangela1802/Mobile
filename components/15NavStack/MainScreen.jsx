import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenO1 from "./Screen01";
import ScreenO2 from "./Screen02";
import ScreenO3 from "./Screen03";

const Stack = createNativeStackNavigator()


const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen01">
                <Stack.Screen name="Screen01" component={ScreenO1} options={{title:"Tela 01"}} />
                <Stack.Screen name="Screen02" component={ScreenO2} />
                <Stack.Screen name="Screen03" component={ScreenO3} options={{title:"Tela 03", headerStyle: {backgroundColor:"red"}, headerTintColor:"#fff"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen