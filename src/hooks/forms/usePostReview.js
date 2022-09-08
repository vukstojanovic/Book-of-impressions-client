import { useMutation, useQueryClient } from 'react-query'
import { getCookie, setCookie } from 'cookies-next'

import { postFormData } from '@/services/form'

export const usePostReview = ({ id, setIsLoading, setIsSuccess, resetFormData, formType }) => {
  const queryClient = useQueryClient()
  return useMutation({
    onSuccess: (data) => {
      if (formType === 'Answer' && !getCookie('sessionIdAnswer')) {
        setCookie('sessionIdAnswer', data[1].session)
      }
      if (formType === 'Rating' && !getCookie('sessionIdRating')) {
        setCookie('sessionIdRating', data[1].session)
      }
      if (formType === 'Ratings' && !getCookie('sessionIdRatings')) {
        setCookie('sessionIdRatings', data[1].session)
      }

      setIsLoading(false)
      setIsSuccess(true)
      resetFormData()
      queryClient.invalidateQueries(['review', id])
    },
    onError: (error) => {
      if (error.response.data.statusCode === 400) {
        console.log('vec ste submitovali taj tip forme, probajte za sat vremena')
      }
      setIsLoading(false)
    },
    onSettled: () => {
      resetFormData()
    },
    mutationFn: postFormData,
  })
}
