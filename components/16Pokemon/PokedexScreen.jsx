import { View, Text, Button, FlatList, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";

const PokedexScreen = () => {

    const [pokemons, setPokemons] = useState([])

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
                (json) => {
                    const vetorFormatado = json.results.map(
                        ({ name, url }) => {
                            return { id: url.split("/")[6], name, url }
                        }
                    )
                    // console.log(vetorFormatado)
                    setPokemons(vetorFormatado)
                })
            .catch(error => console.log(error))
    }

    const renderPokemons = () => {
        return (
            <ScrollView>
                <View
                    style={{
                        flex:1,
                        flexDirection:"row",
                        justufyContent:"space-evenly",
                        flexWrap:"wrap"
                    }}
                >
                    {
                        //map retorna um vetor
                        pokemons.map(
                            (pokemonObj) => {
                                return (
                                    <View>
                                        <Text>{pokemonObj.name.toUpperCase()}</Text>
                                        <Image
                                            source={{uri:`url`}}
                                            style={{width:60, height:60}}
                                        />
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        )
    }

    return (
        <View>
            <Text>Pokedex</Text>
    
            {renderPokemons()}
        </View>
    )
}

export default PokedexScreen