import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AccessToken, AuthState } from '@/types/auth'

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: AuthState['user']; accessToken: AccessToken }>) {
      const tokenString = action.payload.accessToken.token_type + ' ' + action.payload.accessToken.access_token
      localStorage.setItem('PoopieToken', tokenString)
      state.isLoggedIn = true
      state.user = action.payload.user
      state.token = tokenString
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
      state.token = null
    }
  }
})

export default authSlice.reducer

export const { login, logout } = authSlice.actions
