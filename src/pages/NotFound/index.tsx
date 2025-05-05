import Translations from '@/components/Translations'
import Header from '@/layout/Header/LandingHeader'
import { Box, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function NotFound() {
  return (
    <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Header />
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center',
            width: { xs: '100%', md: '676px' }
          }}
        >
          <LazyLoadImage
            alt='notfound'
            src='./assets/img/notfound-dark.webp'
            width='clamp(12.5rem, 9.1989rem + 14.0845vw, 21.875rem)'
          />
          <Typography
            component='h3'
            variant='h3'
            sx={{ fontSize: 'clamp(2rem, 1.3838rem + 2.6291vw, 3.75rem)', fontWeight: 700 }}
          >
            <Translations text='notfound' />
          </Typography>
          <Typography
            component='h5'
            variant='h5'
            sx={{
              color: '#9F9F9F',
              fontSize: 'clamp(0.875rem, 0.787rem + 0.3756vw, 1.125rem)',
              fontWeight: 400,
              lineHeight: '26px'
            }}
          >
            <Translations text='notfound-content' />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
