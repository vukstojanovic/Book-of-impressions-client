import { useMutation, useQueryClient } from 'react-query'

import { postFormData } from '@/services/form'
export const usePostReview = () => {
  const queryClient = useQueryClient()
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', 'f5847e5a-0068-4424-ac39-0bc3a5e17f21'])
    },
    mutationFn: postFormData,
  })
}
