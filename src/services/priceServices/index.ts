import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

export const getPrices = async (period: string) => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.PRICE.GET + '/' + period,
    errorMessage: 'Fetching failed'
  })
}
