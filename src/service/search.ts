import { httpClient } from '@/api/httpClient'
import { ISearchResponse } from '@/types/responses/search'

export interface SearchQueryOptions {
  query?: string
  artistCount?: number
  artistOffset?: number
  albumCount?: number
  albumOffset?: number
  songCount?: number
  songOffset?: number
}

async function get({
  query = '',
  artistCount = 20,
  artistOffset = 0,
  albumCount = 20,
  albumOffset = 0,
  songCount = 20,
  songOffset = 0,
}: SearchQueryOptions) {
  const response = await httpClient<ISearchResponse>('/search3', {
    method: 'GET',
    query: {
      query: query || '""',
      artistCount: artistCount.toString(),
      artistOffset: artistOffset.toString(),
      albumCount: albumCount.toString(),
      albumOffset: albumOffset.toString(),
      songCount: songCount.toString(),
      songOffset: songOffset.toString(),
    },
  })

  return response?.data.searchResult3
}

export const search = {
  get,
}
