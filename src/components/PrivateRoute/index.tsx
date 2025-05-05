import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.LANDING)
    }
  }, [isLoggedIn, navigate])

  return children
}

export default PrivateRoute
