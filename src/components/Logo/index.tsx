import { colors } from '@/theme/themePrimitives'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  isInSidebar?: boolean
}

export default function Logo({ isInSidebar = false }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary'
      }}
    >
      <Box
        component='img'
        src='./assets/img/logo.webp'
        alt='logo'
        sx={{ width: { xs: '32px', md: '36px' }, mb: '6px' }}
      />
      <Link to='/'>
        <Typography
          component='h6'
          sx={{ ml: 1, mb: 0, fontSize: { xs: '28px', md: '34px' } }}
          variant='h6'
          color={isInSidebar ? colors.white : 'text.primary'}
        >
          POOPE
        </Typography>
      </Link>
    </Box>
  )
}
