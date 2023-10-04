import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";

const PokedexScreen = ({navigation}) => {

    useEffect(
        () => {
            fetchPokemons()
        },
        []
    )

    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then(response => response.json())
        .then(
            json => {
                const vetorFormatado = json.results.map(
                    ({name, url}) => {
                        return {id:url.split("/")[6], name, url}
                    }
                )
            })
        .catch(error=>console.log(error))
    }

    return (
        <View>
            <Text>Pokedex</Text>
            <Button
                title="ABRIR MODAL"
                onPress={()=>navigation.navigate("PokemonModal")}
            />
        </View>
    )
}

export default PokedexScreen