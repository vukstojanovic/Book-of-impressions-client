import { useMutation, useQueryClient } from 'react-query'

import { postFormData } from '@/services/form'

export const usePostReview = ({
  id,
  setIsLoading,
  setIsSuccess,
  setIsModalOpen,
  resetFormData,
  formType,
}) => {
  const queryClient = useQueryClient()
  return useMutation({
    onSuccess: (data) => {
      if (formType === 'Answer' && !localStorage.getItem('sessionIdAnswer')) {
        localStorage.setItem('sessionIdAnswer', data[1].session)
      }
      if (formType === 'Rating' && !localStorage.getItem('sessionIdRating')) {
        localStorage.setItem('sessionIdRating', data[1].session)
      }
      if (formType === 'Ratings' && !localStorage.getItem('sessionIdRatings')) {
        localStorage.setItem('sessionIdRatings', data[1].session)
      }

      resetFormData()
      setIsLoading(false)
      setIsSuccess(true)
      queryClient.invalidateQueries(['review', id])
    },
    onError: (error) => {
      console.log(error)
      if (error.response.data.statusCode === 400) {
        setIsModalOpen(true)
      }
      setIsLoading(false)
      resetFormData()
    },
    mutationFn: postFormData,
  })
}
