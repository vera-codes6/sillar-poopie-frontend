import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

import { BASE_URL } from '@/configs'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('PoopieToken')
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('PoopieToken')
    }
    return Promise.reject(error)
  }
)

interface ApiRequest extends AxiosRequestConfig {
  errorMessage: string
}

const apiRequest = async <T>(config: ApiRequest): Promise<T> => {
  try {
    const response = await axiosInstance(config)
    return response.data
  } catch (error) {
    console.log(error)
    const message =
      error instanceof AxiosError
        ? error.response?.data.message || error.response?.data.error
        : error instanceof Error
          ? error.message
          : 'An unknown error occured'

    throw new Error(message || config.errorMessage)
  }
}

export default apiRequest
