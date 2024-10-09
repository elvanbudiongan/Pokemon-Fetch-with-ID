<script lang="ts">
import { defineComponent } from 'vue';
import { usePokedexApi } from '@/composables/usePokedexApi';
import  VPokemonInfo from '@/components/VPokemonInfo.vue';
import VPokemonForm from '@/components/VPokemonForm.vue';

export default defineComponent({
	components: {
		VPokemonInfo,
		VPokemonForm
	},
	setup() {
		const { pokemonData, error, fetchPokemon } = usePokedexApi();

		const searchPokemon = (id: string | number ) => {
			fetchPokemon(id);
		};

		return { pokemonData, error, searchPokemon };
	}
});
</script>

<template>
	<div class="view-container">
		<h1> Pokedex</h1>

		<keep-alive>
			<VPokemonForm @search="searchPokemon" />
		</keep-alive>

		<transition name="fade" mode="out-in">
			<VPokemonInfo v-if="pokemonData" :pokemon="pokemonData" />
		</transition>

		<p v-if="error" class="error"> {{error.message}}</p>
	</div>
</template>

<style scoped>
.error{
	color: red;
}

h1{
	color: Green;
	font-family: Impact, fantasy;
                                                
}
.view-container{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>