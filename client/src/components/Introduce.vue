<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const name = ref('');

const submit = () => {
  userStore.username = name.value;
};
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      label="Введите имя"
      v-model="name"
    />

    <v-btn
      type="submit"
      color="primary"
    >
      Войти
    </v-btn>
  </form>
</template>
