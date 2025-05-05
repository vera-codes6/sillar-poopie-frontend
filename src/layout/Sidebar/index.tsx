import { useMemo } from 'react'

import { Badge, Box, Drawer, Stack, styled } from '@mui/material'
import Translations from '@/components/Translations'
import Logo from '@/components/Logo'
import { ROUTES } from '@/constants/routes'
import { NavLink } from 'react-router-dom'
import { DASHBOARD, LOGOUT, MARKET, NOTIFICATION, SETTINGS, SUPPORT, TRANSACTIONS } from '@/constants/sidebar'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'

const TabItem = styled(NavLink)({
  background: 'none',
  border: 'none',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 400,
  color: colors.black74,
  justifyContent: 'flex-start',
  gap: '12px',
  borderRadius: 0,
  padding: '12px 36px',
  '&:hover': {
    color: 'white'
  },
  display: 'flex',
  alignItems: 'center'
})

const activeTabState = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? colors.white : colors.black74
  }
}

interface Props {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  tab: string
  handleSetTab: (tab: string) => void
  newsCount: number
}

export default function Sidebar({ mobileOpen, handleDrawerToggle, tab, handleSetTab, newsCount }: Props) {
  const container = window !== undefined ? () => document.body : undefined

  const DrawerContent = useMemo(() => {
    return (
      <Stack direction='column' spacing='50px' p='24px 0' sx={{ background: '#1A1A1A' }} height='100%'>
        <Stack direction='row' px='24px'>
          <Logo isInSidebar={true} />
        </Stack>
        <Stack direction='column' justifyContent='space-between' height='100%'>
          <Stack direction='column' spacing='8px'>
            <TabItem style={activeTabState} onClick={() => handleSetTab(DASHBOARD)} to={ROUTES.DASHBOARD.HOME}>
              <AppIcon name='dashboard' />
              <Translations text={DASHBOARD} />
            </TabItem>
            <TabItem
              style={activeTabState}
              onClick={() => handleSetTab(TRANSACTIONS)}
              to={ROUTES.DASHBOARD.TRANSACTION}
            >
              <AppIcon name='transactions' />
              <Translations text={TRANSACTIONS} />
            </TabItem>
            <TabItem style={activeTabState} onClick={() => handleSetTab(MARKET)} to={ROUTES.DASHBOARD.MARKET}>
              <AppIcon name='market' />
              <Translations text={MARKET} />
            </TabItem>
            <TabItem
              style={activeTabState}
              onClick={() => handleSetTab(NOTIFICATION)}
              to={ROUTES.DASHBOARD.NOTIFICATION}
            >
              <Badge badgeContent={newsCount} color='success'>
                <AppIcon name='notification' />
              </Badge>
              <Translations text={NOTIFICATION} />
            </TabItem>
            <TabItem style={activeTabState} onClick={() => handleSetTab(SETTINGS)} to={ROUTES.DASHBOARD.SETTING}>
              <AppIcon name='settings' />
              <Translations text={SETTINGS} />
            </TabItem>
          </Stack>
          <Stack direction='column' spacing='8px'>
            <TabItem style={activeTabState} onClick={() => handleSetTab(SUPPORT)} to={ROUTES.DASHBOARD.SUPPORT}>
              <AppIcon name='support' />
              <Translations text='support' />
            </TabItem>
            <TabItem to='#' onClick={() => handleSetTab(LOGOUT)}>
              <AppIcon name='logout' />
              <Translations text='logout' />
            </TabItem>
          </Stack>
        </Stack>
      </Stack>
    )
  }, [tab, handleSetTab])

  const handleDrawerClose = () => {
    handleDrawerToggle()
  }

  return (
    <Box
      component='nav'
      sx={theme => ({
        [theme.breakpoints.up('lg')]: {
          width: '220px',
          flexShrink: 0
        }
      })}
      aria-label='sidebar folders'
    >
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerClose}
        sx={theme => ({
          [theme.breakpoints.up('lg')]: {
            display: 'none'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '220px',
            borderRight: 'none'
          }
        })}
        keepMounted={true}
      >
        {DrawerContent}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={theme => ({
          [theme.breakpoints.down('lg')]: {
            display: 'none'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '220px',
            borderRight: 'none'
          }
        })}
        style={{ border: 'none' }}
        open
      >
        {DrawerContent}
      </Drawer>
    </Box>
  )
}
