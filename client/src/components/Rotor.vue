<script setup lang="ts">
import { size } from '@/constants/alphabet';

defineProps<{
  modelValue: number;
  label: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void;
}>();

const update = (value: string) => {
  const number = Number(value);
  if (Number.isNaN(number)) return;
  emit('update:modelValue', number > size ? size : number);
};
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    :label="label"
    hide-details
    @update:model-value="update"
  />
</template>
