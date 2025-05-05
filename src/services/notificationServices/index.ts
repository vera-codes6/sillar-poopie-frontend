import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

export const fetchNotifications = async () => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.NOTIFICATION.GET,
    errorMessage: 'Fetching Notification failed'
  })
}

export const markNotificationById = async (id: number) => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.NOTIFICATION.MARK_NOTIFICATION + '/' + id.toString(),
    errorMessage: 'Fetching failed'
  })
}

export const markAll = async () => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.NOTIFICATION.MARK_ALL,
    errorMessage: 'Fetching failed'
  })
}
