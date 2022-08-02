import { useQuery } from 'react-query'
import { axios } from '@/lib/axios'

export const getFormData = ({ id }) => {
  return axios({ method: 'get', url: `api/public/form/${id}` })
}

export const useFormData = ({ id }) => {
  return useQuery(['formData', id], () => getFormData({ id }))
}
