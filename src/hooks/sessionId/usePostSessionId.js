import { useMutation } from 'react-query'

import { postSessionId } from '@/services/sessionId'

export const usePostSessionId = ({ setIsLoading }) => {
  return useMutation({
    onSettled: () => {
      setIsLoading(false)
    },
    mutationFn: postSessionId,
  })
}
