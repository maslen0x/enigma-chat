import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { decrypt, encrypt } from '@/utils/crypto';
import { useSocketStore } from './socket';
import { useUserStore } from './user';
import { useRotorsStore } from './rotors';

interface Message {
  username: string;
  message: string;
}

export const useMessagesStore = defineStore('messages', () => {
  const socketStore = useSocketStore();
  const userStore = useUserStore();
  const rotorsStore = useRotorsStore();

  const messages = ref<Message[]>([]);

  const decryptedMessages = computed(() =>
    messages.value.map((data) => ({
      ...data,
      message: decrypt(data.message, rotorsStore.rotors),
    }))
  );

  const sendMessage = (message: string) => {
    socketStore.socket.emit('messages/send', {
      username: userStore.username,
      message: encrypt(message, rotorsStore.rotors),
    });
  };

  socketStore.socket.on('messages/get', (data) => {
    messages.value.push(data);
  });

  return {
    messages: decryptedMessages,
    sendMessage,
  };
});
