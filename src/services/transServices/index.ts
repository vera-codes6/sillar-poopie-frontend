import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

export const fetchTransactions = async (pageNumber: number, pageSize: number) => {
  return apiRequest({
    url: `${API_ENDPOINTS.TRANS.GET}/${pageNumber}/${pageSize}`,
    method: 'GET',
    errorMessage: 'Fetching Failed'
  })
}
