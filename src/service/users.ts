import { httpClient } from '@/api/httpClient'
import { GetUsersResponse } from '@/types/responses/users'

async function getUsers() {
  const response = await httpClient<GetUsersResponse>('/getUsers', {
    method: 'GET',
  })

  return response?.data.users.user
}


export const users = {
  getUsers
}
