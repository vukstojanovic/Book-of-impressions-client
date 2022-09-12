import { axios } from '@/lib/axios'

export const postSessionId = ({ sessionIds, formId }) => {
  return axios({
    method: 'post',
    url: `/public/session`,
    data: { formId, sessionIds },
  })
}
