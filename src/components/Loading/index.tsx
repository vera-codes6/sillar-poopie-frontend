import { Box, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Translations from '../Translations'

export default function Loading() {
  return (
    <Box width='100%' height='100%'>
      <LazyLoadImage alt='loading' src='./assets/img/loading.webp' />
      <Typography component='h3' variant='h3' sx={{ color: '#FFD258', fontSize: '40px', fontWeight: 700 }}>
        <Translations text='loading' />
      </Typography>
    </Box>
  )
}
