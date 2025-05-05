import Header from './Header/LandingHeader'
import Footer from './Footer'
import LandingContent from '@/pages/Landing'
import { useEffect, useState } from 'react'
import ConnectModal from '@/components/Modal/ConnectModal'
import AuthModal from '@/components/Modal/AuthModal'
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn'
import { dispatch, logout } from '@/store'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export default function Landing() {
  const [open, setOpen] = useState(false)
  const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.DASHBOARD.HOME)
    }
  }, [isLoggedIn])

  const handleOpen = () => {
    if (isLoggedIn) dispatch(logout())
    else setOpen(!open)
  }

  return (
    <>
      <Header handleOpen={handleOpen} />
      <LandingContent />
      <Footer />
      {/* <ConnectModal open={open} handleOpen={handleOpen} /> */}
      <AuthModal open={open} handleOpen={handleOpen} />
    </>
  )
}
