<script setup lang="ts">
import { useRotorsStore } from '@/store/rotors';
import Rotor from './Rotor.vue';

const rotorsStore = useRotorsStore();
</script>

<template>
  <v-row :class="$style.row">
    <v-col :class="$style.col">
      <Rotor
        v-model="rotorsStore.first"
        label="Ротор №1"
      />
    </v-col>

    <v-col :class="$style.col">
      <Rotor
        v-model="rotorsStore.second"
        label="Ротор №2"
      />
    </v-col>

    <v-col :class="$style.col">
      <Rotor
        v-model="rotorsStore.third"
        label="Ротор №3"
      />
    </v-col>
  </v-row>
</template>

<style module>
div.row {
  flex: unset;
  border-bottom: 1px solid #9e9e9e;
  padding: 8px;
  margin: 0;
}

div.col {
  padding: 8px;
}
</style>
