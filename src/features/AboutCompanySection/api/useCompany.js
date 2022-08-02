import { useQuery } from 'react-query'
import { axios } from '@/lib/axios'

export const getCompanyData = () => {
  return axios({ method: 'get', url: `api/public/company` })
}

export const useFormData = () => {
  return useQuery('companyInfo', getCompanyData)
}
