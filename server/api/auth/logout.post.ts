import { H3Event } from 'h3'
import { serverApi } from '../utils/serverApi'

export default defineEventHandler (async event => {
  const api = serverApi(event)

  try {

    // Do the actual request to the external API
    const res = await api.raw('/auth/logout', 'POST')

    const cookies = (res?.headers.get('set-cookie') || '').split(',')

    for (const cookie of cookies) {
      appendHeader(event, 'set-cookie', cookie)
    }

    return { message: 'success' }

  } catch (err) {
    throw createError('An error occurred while fetching the data.')
  }

})
