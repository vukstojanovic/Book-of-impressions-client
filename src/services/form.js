import { axios } from '@/lib/axios'

export const getFormData = ({ id }) => {
  return axios({
    method: 'get',
    url: `/public/form/${id}`,
  })
}
