import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useRotorsStore = defineStore('rotors', () => {
  const first = ref(0);
  const second = ref(0);
  const third = ref(0);

  const rotors = computed(() => [first.value, second.value, third.value] as const);

  return {
    first,
    second,
    third,
    rotors,
  };
});
