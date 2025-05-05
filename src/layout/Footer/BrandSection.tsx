import Logo from '@/components/Logo'
import Translations from '@/components/Translations'
import { Box, Stack, Typography } from '@mui/material'

export default function BrandSection() {
  return (
    <Box>
      <Stack direction='row' justifyContent={{ xs: 'center', md: 'flex-start' }} mb='16px'>
        <Logo />
      </Stack>
      <Typography
        variant='body1'
        sx={theme => ({
          width: '80%',
          fontSize: 'clamp(0.875rem, 0.787rem + 0.3756vw, 1.125rem)',
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            width: '100%'
          }
        })}
      >
        <Translations text='footer.col1' />
      </Typography>
    </Box>
  )
}
