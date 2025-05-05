import { Suspense, useState } from 'react'
import { Stack } from '@mui/material'

import Sidebar from './Sidebar'
import Header from './Header/DashboardHeader'
import { Outlet } from 'react-router-dom'
import Loading from '@/components/Loading'

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [tab, setTab] = useState<string>('dashboard')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSetTab = (tab: string) => {
    setTab(tab)
    setMobileOpen(false)
  }

  return (
    <Stack direction='row'>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} tab={tab} handleSetTab={handleSetTab} />
      <Stack sx={{ width: '100%', position: 'relative' }} direction='column'>
        <Header title={tab} handleDrawerToggle={handleDrawerToggle} />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Stack>
    </Stack>
  )
}
