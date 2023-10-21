import { defineStore } from 'pinia'


export const useStore = defineStore('app', {
  state: () => ({
    user: null as any
  }),
  actions: {
    setUser(user: any) {
      this.user = user
    }
  }
})
