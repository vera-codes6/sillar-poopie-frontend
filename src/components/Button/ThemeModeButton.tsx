import { IconButton, IconButtonProps, useColorScheme } from '@mui/material'
import AppIcon from '../AppIcon'
import { colors } from '@/theme/themePrimitives'

interface Props {
  isLanding?: boolean
  isSticky?: boolean
}

export default function ThemeModeButton({ isLanding = true, isSticky = false }: Props & Partial<IconButtonProps>) {
  const { mode, systemMode, setMode } = useColorScheme()

  const handleMode = () => {
    if ((systemMode || mode) === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const icon = {
    light: <AppIcon name='dark' />,
    dark: <AppIcon name='light' />
  }[resolvedMode]

  return (
    <IconButton
      id='themeBtn'
      sx={theme => ({
        width: { xs: '40px', md: isLanding ? '48px' : '40px' },
        height: { xs: '40px', md: isLanding ? '48px' : '40px' },
        border: isLanding ? '1px solid' : 'none',
        borderColor: theme.palette.divider,
        color: isLanding || !isSticky ? '' : colors.white
      })}
      onClick={handleMode}
    >
      {icon}
    </IconButton>
  )
}
