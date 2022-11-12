<template>
  <h1> Who's that Pokemon? </h1>
  <PokemonPicture/>
  <PokemonOptions/>
  <!--  TODO: Options -->
</template>
<script>

import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

export default {
  name: "PokemonPage",
  components: {PokemonPicture, PokemonOptions},
}

</script>
