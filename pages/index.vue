<template>
    <div>
        <h1>Hello {{store.user?.username}}!</h1>
        <butto @click="logout()" >Logout</butto>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store/store';


const store = useStore()

definePageMeta({
    middleware: 'only-auth'
})

const authService = useAuthService()
const router = useRouter()

function logout() {
    try {
        authService.logout()
        store.setUser(null)
        router.push('/login')
    } catch (e) {
        console.log(e)
    }
}

</script>

<style scoped>

</style>