import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Box, Container, Typography } from '@mui/material'

import SectionDivider from '@/components/SectionDivider'
import Translations from '@/components/Translations'
import Section from './Section'
import AppIcon from '@/components/AppIcon'

export default function Banner() {
  return (
    <Section id='banner' sx={{ position: 'relative', overflow: 'hidden', mt: { xs: '110px', md: 0 } }}>
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography
          component='h1'
          variant='h1'
          sx={theme => ({
            [theme.breakpoints.down('md')]: {
              letterSpacing: '1.8px',
              fontWeight: 700
            }
          })}
        >
          POOPE
        </Typography>
        <Typography
          component='h2'
          variant='h2'
          sx={theme => ({
            marginTop: '-60px',
            [theme.breakpoints.down('md')]: {
              marginTop: 0,
              letterSpacing: '6px',
              fontWeight: 700
            }
          })}
        >
          SOLANA
        </Typography>
        <Box
          sx={theme => ({
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '450px',
            [theme.breakpoints.down('md')]: {
              width: '190px',
              height: '200px'
            }
          })}
        >
          <LazyLoadImage alt='ellipse blur' src='./assets/img/ellipse106.svg' width='100%' height='100%' />
        </Box>
        <Box
          sx={theme => ({
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 100,
            [theme.breakpoints.down('lg')]: {
              width: '145.885px',
              height: '165px'
            }
          })}
        >
          <LazyLoadImage alt='logo' src='./assets/img/poope-coin.webp' />
        </Box>
      </Box>
      <Container maxWidth='xl' sx={{ position: 'relative', zIndex: 10 }}>
        <Typography sx={{ marginTop: '44.32px', textAlign: 'center' }} variant='body1'>
          <Translations text='section1.description' />
        </Typography>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          right: 'clamp(-2.328125rem, -3.6485rem + 5.6338vw, 1.421875rem)',
          top: 'clamp(4.773125rem, 6.4538rem + -7.1709vw, 0rem)',
          width: 'clamp(5.385875rem, 3.4815rem + 8.1253vw, 10.79425rem)',
          height: 'clamp(2.841675rem, 1.8369rem + 4.287vw, 5.695215rem)'
        }}
      >
        <AppIcon name='cloud' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '-104.61px',
          top: '246.68px',
          width: 'clamp(5.385875rem, 3.4815rem + 8.1253vw, 10.79425rem)',
          height: 'clamp(2.841675rem, 1.8369rem + 4.287vw, 5.695215rem)'
        }}
      >
        <AppIcon name='cloud' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '187.25px',
          bottom: '150px',
          width: 'clamp(5.385875rem, 3.4815rem + 8.1253vw, 10.79425rem)',
          height: 'clamp(2.841675rem, 1.8369rem + 4.287vw, 5.695215rem)'
        }}
      >
        <AppIcon name='cloud' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '6px',
          right: '196px'
        }}
      >
        <AppIcon name='whiteStar' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '181.56px',
          left: '61.06px',
          width: '40px',
          height: '40px'
        }}
      >
        <AppIcon name='yellowStar' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '230.88px',
          left: '27.61px',
          width: '20px',
          height: '20px'
        }}
      >
        <AppIcon name='whiteStar' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '449.52px',
          right: '40px',
          width: '40px',
          height: '40px'
        }}
      >
        <AppIcon name='yellowStar' />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '156px',
          right: '198px',
          width: '34px',
          height: '35px'
        }}
      >
        <AppIcon name='whiteStar' />
      </Box>

      <SectionDivider />
    </Section>
  )
}
