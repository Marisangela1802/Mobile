import { View, Text, Pressable } from "react-native";

const MyPressable = ({funcao, titulo}) => {
    return (
        <View>
            <Pressable
                onPress={funcao}
                style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed ? "black" : "brown",
                            padding: 5,
                        }
                    ]
                }
            >
                <Text style={{ color: "white", fontWeight: "bold" }} >{titulo}</Text>
            </Pressable>
        </View>
    )
}

export default MyPressable