import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import estilos from "./14Estilos";

const MyNetworking = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(
        () => {
            getMovies()
        },
        //se eu não colocar nada o react vai entender que eu quero que carregue so uma vez, que é quando carregar
        []
    )

    const getMovies = () => {
        fetch("https://reactnative.dev/movies.json")
            .then(response => response.json())
            .then(({ title, description, movies }) => {
                setTitle(title)
                setDescription(description)
                setMovies(movies)

            })
            .catch(error => console.log(error))
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>{title}</Text>
            <View style={{ margin: 20, padding: 10 }} >
                <Text style={estilos.description}>{description}</Text>
            </View>
            <FlatList
                data={movies}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={{flex:1, flexDirection:"row", margin: 10}} >
                                <View style={{flex:1}} >
                                    <Text style={{fontSize:25, fontWeight:"bold"}} >{item.id}</Text>
                                </View>
                                <View style={{flex:2}} >
                                    <Text style={{fontSize:25}}>{item.title}</Text>
                                    <Text style={{fontSize:20}}>{item.releaseYear}</Text>

                                </View>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default MyNetworking