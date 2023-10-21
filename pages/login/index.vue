<template>
    <div>
        <input placeholder="E-Mail" v-model="email" >
        <input placeholder="Password" v-model="password" >
        <button @click="login()">Login</button>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store/store';


definePageMeta({
    middleware: 'no-auth'
})

const email = ref('')
const password = ref('')
const authService = useAuthService()
const store = useStore()
const router = useRouter()
async function login() {
    try {
        await authService.login(email.value, password.value)
        const user = await authService.getUser()
        console.log(user)
        store.setUser(user)
        router.push('/')
    } catch (e) {
        console.log(e)
    }
}

</script>

<style scoped>

</style>