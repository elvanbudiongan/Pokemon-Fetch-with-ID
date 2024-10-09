<script lang="ts">
import { defineComponent } from 'vue';
import  PokedexView from './views/PokedexView.vue';

export default defineComponent({
  components: {
    PokedexView
  }
});
</script>

<template>
  <div id="app">
    <PokedexView />
  </div>
</template>

<style scoped>
 #app{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid blue;
  padding: 60px;
  border-radius: 10px;
 }


</style>
