import { useQuery } from 'react-query'
import { axios } from '@/lib/axios'

export const getCompanyData = (id) => {
  return axios({
    method: 'get',
    url: `api/public/company/${id}`,
  })
}

export const useCompany = (id) => {
  return useQuery(['companyInfo', id], () => getCompanyData(id))
}
