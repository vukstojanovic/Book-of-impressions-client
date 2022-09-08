import { useMutation } from 'react-query'

import { postSessionId } from '@/services/sessionId'

export const usePostSessionId = () => {
  return useMutation({
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.error(error)
    },
    mutationFn: postSessionId,
  })
}
