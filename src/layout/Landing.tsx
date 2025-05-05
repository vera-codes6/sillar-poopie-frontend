import Header from './Header/LandingHeader'
import Footer from './Footer'
import LandingContent from '@/pages/Landing'
import { useState } from 'react'
import ConnectModal from '@/components/Modal/ConnectModal'
import AuthModal from '@/components/Modal/AuthModal'
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn'
import { dispatch, logout } from '@/store'

export default function Landing() {
  const [open, setOpen] = useState(false)
  const isLoggedIn = useIsLoggedIn()

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
