import { defineNuxtPlugin } from '#imports'
import { useStore } from '~~/store/store'
import { useApi } from '~/composables/useApi'

export default defineNuxtPlugin(async () => {
  const client = useApi()
  const store = useStore()

  try {
    const user = await client.get('/auth/user')
    if(user) {
      store.setUser(user)
    }   
  } catch (err) {
    console.error('No user found')
  }
})
