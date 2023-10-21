import { useStore } from '~~/store/store'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore()

  if (store.user) {
    return navigateTo('/', { replace: true })
  }
})
