import { HandleOpenNavMenu } from '@/types/header'
import { IconButton } from '@mui/material'
import AppIcon from '../AppIcon'
import { colors } from '@/theme/themePrimitives'

interface Props {
  handleOpenNavMenu: HandleOpenNavMenu
  isClose?: boolean
}

export default function Hamburger({ handleOpenNavMenu, isClose = false }: Props) {
  return (
    <IconButton
      size='large'
      onClick={handleOpenNavMenu}
      sx={theme => ({
        color: isClose ? 'text.primary' : colors.black,
        background: isClose ? 'transparent !important' : `${colors.yellowText} !important`,
        border: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        },
        width: { xs: isClose ? '20px' : '40px', md: '48px' },
        height: { xs: isClose ? '20px' : '40px', md: '48px' }
      })}
    >
      <AppIcon name={isClose ? 'close' : 'hamburger'} />
    </IconButton>
  )
}
