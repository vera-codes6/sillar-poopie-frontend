export interface User {
  id: string
  username: string
  email: string
  gender: string
}

export interface AuthFormData {
  username?: string
  email: string
  gender?: string
  password: string
}

export interface VerifyEmailFormData {
  email: string
  code: string
}

export interface AccessToken {
  access_token: string
  token_type: string
}

export interface LoginUserRes {
  data: {
    user: User
    jwt: AccessToken
  }
}

export interface VerifyTimeInfo {
  time: Number
  intervalId: NodeJS.Timeout
}

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}
