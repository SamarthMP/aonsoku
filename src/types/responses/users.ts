import { SubsonicResponse } from './subsonicResponse'

export interface User {
    username: string,
    adminRole: boolean
}

export interface GetUsersResponse
  extends SubsonicResponse<{ users: SubsonicResponse<{ user: User[] }> }> {}
