const getPokemons = () => {

    const pokemonArr = Array.from((Array(650)))
    return pokemonArr.map((_,index) => index + 1)
}


const getPokemonOptions = () => {

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5)
    getPokemonsNames(mixedPokemons.splice(0,4))

}


const getPokemonsNames = ( [pokemon1, pokemon2, pokemon3, pokemon4] = []) => {
    console.log(pokemon1,pokemon2,pokemon3,pokemon4)
}

export default getPokemonOptions