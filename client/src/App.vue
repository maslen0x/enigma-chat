<script setup lang="ts">
import { useUserStore } from '@/store/user';
import Container from '@/components/Container.vue';
import Introduce from '@/components/Introduce.vue';
import Chat from '@/components/Chat.vue';

const userStore = useUserStore();
</script>

<template>
  <Container>
    <Introduce v-if="!userStore.username" />
    <Chat v-else />
  </Container>
</template>
