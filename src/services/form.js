import { axios } from '@/lib/axios'

export const getFormData = ({ id }) => {
  return axios({
    method: 'get',
    url: `/public/form/${id}`,
  })
}

export const postFormData = ({ data, type }) => {
  return axios({
    method: 'post',
    url: `/public/review`,
    data: data,
  })
}
