<template>

  <h1 v-if="!pokemon"> Wait please... </h1>

  <div v-else>
    <h1> Who's that Pokemon? </h1>

    <PokemonPicture
        :pokemon-id="pokemon.id"
        :show-pokemon="showPokemon"
    />
    <PokemonOptions
        :pokemons="pokemonArr"
        @user-selection="checkAnswer($event)"
    />

    <div v-if="showAnswer" class="fade-in" id="result-container">
      <h2> {{ message }}</h2>

      <button @click="newGame">
        Nuevo Juego
      </button>

    </div>

  </div>

</template>
<script>

import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from '@/helpers/getPokemonOptions';


export default {
  name: "PokemonPage",
  components: {PokemonPicture, PokemonOptions},
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]

    },
    checkAnswer(pokemonId) {

      pokemonId === this.pokemon.id ? this.showPokemon = true : false
      this.showAnswer = true

      if (pokemonId === this.pokemon.id) {
        this.message = `Congratulations, ${this.pokemon.name}`
      } else {
        this.message = `Ooops it was ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}

</script>

<style>

#result-container {
  padding-left: 40px;
}

</style>
