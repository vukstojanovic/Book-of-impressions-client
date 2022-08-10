import { useQuery } from 'react-query'
import { getFormData } from 'src/services/form'

export const useFormData = ({ id }) => {
  return useQuery(['formData', id], () => getFormData({ id }))
}
