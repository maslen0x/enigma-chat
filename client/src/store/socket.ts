import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

export const useSocketStore = defineStore('socket', () => {
  const socket = io(import.meta.env.VITE_SOCKET_URL);

  return { socket };
});
