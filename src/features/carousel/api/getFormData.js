import { useQuery } from 'react-query'
import { axios } from '@/lib/axios'

export const getFormData = ({ id }) => {
  return axios({
    method: 'get',
    url: `/public/form/${id}`,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNTZhOTcyZC05NDU4LTQ2NjQtYWMxNy05N2E2YzI5NjJlNzUiLCJuYW1lIjoicXdlIHJzdCIsImVtYWlsIjoiZGFuaWxvbS5hcmtpY2V2aWNAcXVhbnRveC5jb20iLCJyb2xlIjoiU3VwZXJVc2VyIiwiaWF0IjoxNjU5NTI3OTkwLCJleHAiOjE2NTk1Mjg4OTB9.gW9isVyc9VDi_Y5_JClMLDBuHZ7BryG_5G-b3dFw6MY`,
    },
  })
}

export const useFormData = ({ id }) => {
  return useQuery(['formData', id], () => getFormData({ id }))
}
