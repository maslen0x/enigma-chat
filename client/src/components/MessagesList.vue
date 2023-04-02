<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import { useMessagesStore } from '@/store/messages';

const messagesStore = useMessagesStore();

const scrollbar = ref<HTMLElement | null>(null);

onUpdated(() => {
  if (!scrollbar.value) return;
  scrollbar.value.scrollTop = scrollbar.value.scrollHeight;
});
</script>

<template>
  <div
    ref="scrollbar"
    :class="$style.list"
  >
    <v-card
      v-for="item in messagesStore.messages"
      :key="Math.random()"
      :class="$style.item"
      :title="item.username"
      :text="item.message"
    />
  </div>
</template>

<style module>
.list {
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
}

.item:not(:last-child) {
  margin-bottom: 16px;
}
</style>
