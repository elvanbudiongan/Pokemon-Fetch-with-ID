<script lang="ts">
import {defineComponent, PropType } from 'vue';

  export default defineComponent({
   props: {
      pokemon: {
        type: Object as PropType<any>,
        required: true,
      }
   }
  });
</script>

<template>
  <transition name="fade">
    <div v-if="pokemon">
      <br>
      <h2>{{ pokemon.name.toUpperCase() }}</h2> <br>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
    
      <h3> Abilities</h3>
      <ul>
        <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
          {{ability.ability.name}}
        </li>
      </ul>

      <teleport to="body">
        <div>
          <img :src="pokemon.sprites.front_default" alt="Pokemon Image" />
          <img :src="pokemon.sprites.front_shiny" alt="Pokemon Image" />
        </div>
        
        <div>
          <img :src="pokemon.sprites.back_default" alt="Pokemon Image" />
          <img :src="pokemon.sprites.back_shiny" alt="Pokemon Image" />
        </div>
        
      </teleport>

    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
h2{
  color: #05C1F0;
}

img {
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 2s infinite  alternate;
    width: 200px;
    height: auto;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
</style>

