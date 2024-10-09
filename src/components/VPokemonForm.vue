<script lang="ts">
  import {defineComponent, ref } from 'vue';

  export default defineComponent({
    emits: [`search`],
    setup(_, {emit}){
      const pokemonId = ref('');

      const onSubmit= () => {
        emit('search', pokemonId.value);
      };

      return{ pokemonId, onSubmit};
    }
  });
</script>

<template>
  <form @submit.prevent="onSubmit" v-bind="$attrs">
    <slot name="label">
      <label for="pokemon-id">Enter Pokemon ID </label>
    </slot>
    <input  type="number" v-model="pokemonId" placeholder="Enter Pokemon ID" />
    <slot>
      <button type="submit">Search</button>
    </slot>
  </form>
</template>


