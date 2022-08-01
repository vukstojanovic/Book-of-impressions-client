import { useQuery } from 'react-query'
export const getFormData = ({ id }) => {
  return axios({ method: 'get', url: `api/public/form/${id}` })
}

export const useFormData = ({ id }) => {
  return useQuery(['formData', id], () => getFormData({ id }))
}
