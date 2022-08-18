import { useMutation, useQueryClient } from 'react-query'

import { postFormData } from '@/services/form'

export const usePostReview = ({ id, setIsLoading, setIsSuccess, resetFormData }) => {
  const queryClient = useQueryClient()
  return useMutation({
    onSuccess: () => {
      resetFormData()
      setIsLoading(false)
      setIsSuccess(true)
      queryClient.invalidateQueries(['review', id])
    },
    mutationFn: postFormData,
  })
}
