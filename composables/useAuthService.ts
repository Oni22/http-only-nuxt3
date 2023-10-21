

export const useAuthService = () => {

    async function login(email: string, password: string) : Promise<void> {
        try {

            // Do a login request from the client side
            await $fetch('/api/auth/login', {
                body: {
                    email,
                    password
                },
                method: 'POST'
            })

        } catch(err) {
            return Promise.reject(err)
        }
    }

    async function logout() : Promise<void> {
        try {

            // Do a logout request from the client side
            await $fetch('/api/auth/logout', {
                method: 'POST'
            })

        } catch(err) {
            return Promise.reject(err)
        }
    }

    async function getUser() : Promise<void> {
        try {

            // Get the current authenticated user
            // useRequestHeaders(['cookies']) will send the httpOnly cookies to the nitro server
            const user = await $fetch('/api/auth/user', {
                headers: useRequestHeaders(['cookies'])
            })

            return user
        } catch(err) {
            return Promise.reject(err)
        }
    }

    return {
        login,
        getUser,
        logout
    }

}