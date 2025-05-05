import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { AuthFormData, LoginUserRes, VerifyEmailFormData } from '@/types/auth'

export const registerUser = async (data: AuthFormData) => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USERS.REGISTER,
    data,
    errorMessage: 'Registration Failed'
  })
}

export const loginUser = async (data: AuthFormData): Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USERS.LOGIN,
    data,
    errorMessage: 'Login Failed'
  })
}

export const verifyEmail = async (data: VerifyEmailFormData) => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USERS.VERIFY,
    data,
    errorMessage: 'Verification Failed'
  })
}
