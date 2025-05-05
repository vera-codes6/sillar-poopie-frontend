import { AppBar, Stack, Box, Button, Toolbar, Container, ListItem, List, ListItemButton, Drawer } from '@mui/material'
import ThemeModeButton from '../../components/Button/ThemeModeButton'
import Translations from '@/components/Translations'
import LanguagePicker from '@/components/SelectLanguage'
import Hamburger from '@/components/Button/Hamburger'
import { useEffect, useState } from 'react'
import { scrollIntoSection } from '@/utils'
import MenuLink from '@/components/Button/MenuLink'
import Logo from '@/components/Logo'
import AppIcon from '@/components/AppIcon'
import { landingHeaderMenu as menuItems } from '@/constants/header'
import { HandleOpenNavMenu } from '@/types/header'
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn'

interface LandingHeaderProps {
  handleOpen?: () => void
}

const Header = (props: LandingHeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const handleOpenNavMenu: HandleOpenNavMenu = (e, item) => {
    e.stopPropagation()
    e.preventDefault()
    scrollIntoSection(`${item}`)
    setMobileOpen(prevState => !prevState)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsSticky(window.pageYOffset > 115)
    })
  }, [])

  const isLoggedIn = useIsLoggedIn()

  const drawer = (
    <Box sx={{ width: '100%', padding: '16px 20px' }}>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Logo />
        <Hamburger isClose={true} handleOpenNavMenu={handleOpenNavMenu} />
      </Stack>
      <List>
        {menuItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ color: 'text.primary', fontSize: '18px', py: '12px', justifyContent: 'center' }}
              onClick={e => {
                handleOpenNavMenu(e, item)
              }}
            >
              <Translations text={`navigation.${item}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <LanguagePicker sx={{ width: '100%', justifyContent: 'center', paddingBottom: '12px' }} />
      <Stack direction='row' spacing='16px'>
        <ThemeModeButton />
        <Button onClick={props.handleOpen} startIcon={<AppIcon name='wallet' />} size='small' sx={{ width: '100%' }}>
          {isLoggedIn ? <Translations text='navigation.Logout' /> : <Translations text='navigation.Connect' />}
        </Button>
      </Stack>
    </Box>
  )

  return (
    <AppBar
      position='fixed'
      sx={{ py: { xs: '16px', md: '24px' } }}
      color={isSticky ? 'default' : 'transparent'}
      elevation={0}
    >
      <Container maxWidth='xl'>
        <Toolbar
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Logo />
          <Stack
            direction='row'
            sx={theme => ({
              [theme.breakpoints.down('lg')]: {
                display: 'none'
              }
            })}
            alignItems='center'
          >
            {menuItems.map(item => (
              <MenuLink key={item} onClick={() => scrollIntoSection(`${item}`)} padding='0 16px'>
                <Translations text={`navigation.${item}`} />
              </MenuLink>
            ))}
            <LanguagePicker />
          </Stack>
          <Stack direction='row' spacing='16px'>
            <ThemeModeButton />
            <Button
              startIcon={<AppIcon name='wallet' />}
              sx={theme => ({
                [theme.breakpoints.down('sm')]: {
                  display: 'none'
                }
              })}
              onClick={props.handleOpen}
              size='small'
            >
              {isLoggedIn ? <Translations text='navigation.Logout' /> : <Translations text='navigation.Connect' />}
            </Button>
            <Hamburger handleOpenNavMenu={handleOpenNavMenu} />
          </Stack>
        </Toolbar>
      </Container>
      <nav>
        <Drawer
          container={undefined}
          variant='temporary'
          open={mobileOpen}
          onClose={handleOpenNavMenu}
          anchor='right'
          PaperProps={{
            sx: {
              width: '100%'
            }
          }}
          ModalProps={{
            keepMounted: true
          }}
          sx={theme => ({
            [theme.breakpoints.up('xl')]: {
              display: 'none'
            }
          })}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  )
}

export default Header
