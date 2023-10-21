import { H3Event } from 'h3'
import Client from '~/utils/api/client'

// server composable for calling the external API through Nitro Server
export const serverApi = (event: H3Event) => {
  const { apiUrl } = useRuntimeConfig().public

  const accessToken = getCookie(event, 'Authorization')
  const refreshToken = getCookie(event, 'Refresh-Token')

  const client = new Client(apiUrl as string, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Refresh-Token': `Bearer ${refreshToken}`,
    } as HeadersInit
  })

  return client
}
