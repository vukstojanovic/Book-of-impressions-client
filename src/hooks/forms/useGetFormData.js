import { useQuery } from 'react-query'

import { getFormData } from '@/services/form'

export const useFormData = ({ id }) => {
  return useQuery(['formData', id], () => getFormData({ id }))
}
