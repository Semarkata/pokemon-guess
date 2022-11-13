import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {

    const pokemonArr = Array.from((Array(650)))
    return pokemonArr.map((_,index) => index + 1)
}


const getPokemonOptions = async () => {

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5)
    return await getPokemonsNames(mixedPokemons.splice(0, 4))
}


const getPokemonsNames = async ( [pokemon1, pokemon2, pokemon3, pokemon4] = []) => {

    const arrPromises = [
        pokemonApi.get(`/${pokemon1}`),
        pokemonApi.get(`/${pokemon2}`),
        pokemonApi.get(`/${pokemon3}`),
        pokemonApi.get(`/${pokemon4}`),
    ]

    const [responsePokemon1, responsePokemon2, responsePokemon3, responsePokemon4] = await Promise.all(arrPromises).then()

    return [
        {
            name: responsePokemon1.data.name,
            id: responsePokemon1.data.id
        },
        {
            name: responsePokemon2.data.name,
            id: responsePokemon2.data.id
        },
        {
            name: responsePokemon3.data.name,
            id: responsePokemon3.data.id
        },
        {
            name: responsePokemon4.data.name,
            id: responsePokemon4.data.id
        }
    ]

}

export default getPokemonOptions