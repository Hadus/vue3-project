import { defineStore } from 'pinia';
import user from '@/mock/current/user.js';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      ...user
    };
  },
  getters: {},
  actions: {
  }
});
