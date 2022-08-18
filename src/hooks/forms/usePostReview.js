import { useMutation, useQueryClient } from 'react-query'

import { postFormData } from '@/services/form'

export const usePostReview = ({ id }) => {
  const queryClient = useQueryClient()
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['review', id])
    },
    mutationFn: postFormData,
  })
}
