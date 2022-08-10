import { useQuery } from 'react-query'

import { axios } from '@/lib/axios'

export const getReviews = async (id) => {
  return axios({ method: 'get', url: `/public/reviews/${id}` })
}

export const useReviews = (id) => {
  return useQuery(['reviews', id], () => getReviews(id))
}
