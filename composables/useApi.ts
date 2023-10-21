import { H3Event } from 'h3'
import Client from '~/utils/api/client'

// server composable for calling the external API through Nitro Server
export const useApi = () => {
  const { apiUrl } = useRuntimeConfig().public

  const accessToken = useCookie('Authorization')
  const refreshToken = useCookie('Refresh-Token')

  const client = new Client(apiUrl as string, {
    headers: {
      'Authorization': `Bearer ${accessToken.value}`,
      'Refresh-Token': `Bearer ${refreshToken.value}`,
    } as HeadersInit
  })

  return client
}
