import { Badge, Box, Button, IconButton, Stack, styled, Theme, Typography } from '@mui/material'
import Popover from '@mui/material/Popover'

import LanguagePicker from '@/components/SelectLanguage'
import Translations from '@/components/Translations'
import SearchInput from '@/components/Input/SearchInput'
import ThemeModeButton from '@/components/Button/ThemeModeButton'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AppIcon from '@/components/AppIcon'
import { colors } from '@/theme/themePrimitives'
import NotificationBox from '@/pages/Dashboard/Notification/NotificationBox'
import { dispatch, logout, useSelector } from '@/store'

const btnStyle = (theme: Theme) => ({
  color: theme.palette.text.primary,
  padding: '12px 10px',
  border: 'none',
  borderRadius: '6px',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    background: colors.black19
  }),
  ...theme.applyStyles('light', {
    background: colors.white
  }),
  [theme.breakpoints.down('lg')]: {
    padding: '12px 0'
  }
})

const btnTextStyle = (theme: Theme) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
  fontSize: '14px',
  fontWeight: 500
})

const NotificationContainer = styled(Stack)(({ theme }) => ({
  padding: '20px',
  width: '500px',
  height: '300px'
}))

interface Props {
  title: string
  handleDrawerToggle: () => void
}

export default function DashHeader({ title, handleDrawerToggle }: Props) {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const { newsCount } = useSelector(state => state.notification)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsSticky(window.pageYOffset > 0)
    })
  }, [])

  const handleNotificationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleProfile = () => {
    dispatch(logout())
  }

  const open = Boolean(anchorEl)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        position: 'fixed',
        background: isSticky ? colors.black1A : 'transparent',
        width: { xs: '100%', lg: 'calc(100% - 220px)' },
        zIndex: 100,
        transition: 'all .2s ease-out'
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ width: { xs: '100%', lg: '70%' }, padding: { xs: '16px 20px', lg: '24px 32px' } }}
      >
        <Typography
          component='h5'
          sx={{ fontSize: '24px', fontWeight: 500, color: isSticky ? colors.white : 'text.primary' }}
        >
          <Translations text={title} />
        </Typography>
        <Stack direction='row' spacing='16px'>
          <LanguagePicker isInDashboard={true} />
          <Button sx={btnStyle}>
            <Translations text='manage' sx={btnTextStyle} />
            <AppIcon name='right' />
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          width: { xs: '100%', lg: '30%' },
          padding: { xs: '16px 20px', lg: '24px 32px 24px 0' }
        }}
      >
        <Stack direction='row' spacing='8px' alignItems='center' sx={{ display: { xs: 'flex', lg: 'none' } }}>
          <IconButton
            sx={{ width: '32px', height: '32px', color: isSticky ? colors.white : 'text.primary' }}
            onClick={handleDrawerToggle}
          >
            <AppIcon name='hamburger' />
          </IconButton>
          <Link to='/'>
            <Box component='img' alt='logo' src='./assets/img/logo.webp' sx={{ width: '32px', height: '32px' }} />
          </Link>
        </Stack>
        <Box sx={{ width: { xs: 'auto', lg: '100%', display: 'flex', alignItems: 'center' } }}>
          <ThemeModeButton
            isLanding={false}
            isSticky={isSticky}
            sx={{ display: { xs: 'inline-flex', lg: 'none' }, mr: '16px' }}
          />
          <SearchInput isSticky={isSticky} />
          <IconButton
            sx={{ width: '40px', height: '40px', mx: '16px', color: isSticky ? colors.white : 'text.primary' }}
            onClick={handleNotificationClick}
          >
            <Badge badgeContent={newsCount} color='success'>
              <AppIcon name='notification' />
            </Badge>
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <NotificationContainer>
              <Typography component='h5' variant='h5' mb={2}>
                Notification
              </Typography>
              <NotificationBox />
            </NotificationContainer>
          </Popover>
          <IconButton onClick={handleProfile}>
            <Box component='img' alt='avatar' src='./assets/img/user.webp' width='40px' height='40px' />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  )
}
