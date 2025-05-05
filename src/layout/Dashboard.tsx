import { Suspense, useEffect, useState } from 'react'
import { Stack } from '@mui/material'

import Sidebar from './Sidebar'
import Header from './Header/DashboardHeader'
import { Outlet } from 'react-router-dom'
import Loading from '@/components/Loading'
import { dispatch, logout, pushNotifications, useSelector } from '@/store'
import { NotificationResponse } from '@/types/notification'
import { fetchNotifications } from '@/services/notificationServices'
import { handleError } from '@/utils'
import { LOGOUT } from '@/constants/sidebar'

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [tab, setTab] = useState<string>('dashboard')

  const { newsCount } = useSelector(state => state.notification)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSetTab = (tab: string) => {
    if (tab === LOGOUT) dispatch(logout())
    setTab(tab)
    setMobileOpen(false)
  }

  const init = async () => {
    try {
      var response = await fetchNotifications()
      dispatch(pushNotifications((response as NotificationResponse).data))
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Stack direction='row'>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        tab={tab}
        handleSetTab={handleSetTab}
        newsCount={newsCount}
      />
      <Stack sx={{ width: '100%', position: 'relative' }} direction='column'>
        <Header title={tab} handleDrawerToggle={handleDrawerToggle} />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Stack>
    </Stack>
  )
}
