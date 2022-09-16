import { useMutation, useQueryClient } from 'react-query'
import { getCookie, setCookie } from 'cookies-next'

import { postFormData } from '@/services/form'

export const usePostReview = ({ id, setIsLoading, setIsSuccess, resetFormData, formType }) => {
  const queryClient = useQueryClient()
  return useMutation({
    onSuccess: (data) => {
      if (formType === 'Answer' && !getCookie('sessionIdAnswer')) {
        setCookie(id, data[1].session)
      }
      if (formType === 'Rating' && !getCookie('sessionIdRating')) {
        setCookie(id, data[1].session)
      }
      if (formType === 'Ratings' && !getCookie('sessionIdRatings')) {
        setCookie(id, data[1].session)
      }

      setIsSuccess(true)
      queryClient.invalidateQueries(['reviews', id])
    },
    onSettled: () => {
      setIsLoading(false)
      resetFormData()
    },
    mutationFn: postFormData,
  })
}
