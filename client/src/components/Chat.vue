<script setup lang="ts">
import { ref } from 'vue';
import { useMessagesStore } from '@/store/messages';
import MessagesList from './MessagesList.vue';
import Header from './Header.vue';

const messagesStore = useMessagesStore();

const message = ref('');

const submit = () => {
  messagesStore.sendMessage(message.value);
  message.value = '';
};

const enter = (e: KeyboardEvent) => {
  if (e.key !== 'Enter') return;

  if (e.ctrlKey) {
    message.value += '\n';
  } else {
    submit();
  }
};
</script>

<template>
  <div
    :class="$style.chat"
    class="rounded-lg"
  >
    <Header />

    <MessagesList />

    <form
      :class="$style.form"
      @submit.prevent="submit"
    >
      <v-textarea
        label="Введите сообщение"
        v-model="message"
        autofocus
        @keydown.prevent.enter="enter"
      />

      <v-btn
        type="submit"
        color="primary"
      >
        Отправить
      </v-btn>
    </form>
  </div>
</template>

<style module>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #9e9e9e;
}

.form {
  padding: 16px;
  border-top: 1px solid #9e9e9e;
}
</style>
