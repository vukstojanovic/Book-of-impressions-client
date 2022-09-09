import { useMutation } from 'react-query'

import { postSessionId } from '@/services/sessionId'

export const usePostSessionId = () => {
  return useMutation({
    mutationFn: postSessionId,
  })
}
