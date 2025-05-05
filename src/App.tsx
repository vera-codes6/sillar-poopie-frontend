import { CssBaseline } from '@mui/material'
import AppTheme from '@/theme/AppTheme'
import { RouterProvider, useNavigate } from 'react-router-dom'
import router from './routes'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { connectSocket } from './lib/socket'
import { useIsLoggedIn } from './hooks/useIsLoggedIn'

export default function App() {
  const isLoggedIn = useIsLoggedIn()

  const init = async () => {
    if (isLoggedIn) await connectSocket()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} closeOnClick={true} />
    </AppTheme>
  )
}
