import { useMutation } from 'react-query'

import { postFormData } from '@/services/form'

export const usePostReview = () => {
  return useMutation({
    onSuccess: () => console.log('success'),
    mutationFn: postFormData,
  })
}
