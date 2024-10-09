import {ref} from 'vue';

export function usePokedexApi(){
	const pokemonData = ref(null);
	const error = ref(null);

	const fetchPokemon = async (id: string | number) =>{
		try{
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			if(!response.ok){
				throw new Error(`Error fetching Pokemon: Status -> ${response.statusText}`);
			}

			const data = await response.json();
        	pokemonData.value = data;
  
		}catch(err){
			error.value = err;
		}
	};

	return{
		pokemonData,
		error,
		fetchPokemon
	}
};