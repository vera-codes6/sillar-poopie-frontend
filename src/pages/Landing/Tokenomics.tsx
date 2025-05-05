import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import Translations from '@/components/Translations'
import SectionDivider from '@/components/SectionDivider'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'

export default function Tokenomics() {
  return (
    <Box
      id='tokenomics'
      sx={{
        backgroundColor: 'warning.light',
        position: 'relative'
      }}
    >
      <Container maxWidth='xl'>
        <Grid flexDirection={{ xs: 'column', md: 'row-reverse' }} container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }} pt='150px'>
            <Stack direction='row' mb='24px'>
              <Typography component='h3' variant='h3' color={colors.yellowText}>
                <Translations text='section3.token' />
              </Typography>
              <Typography component='h3' variant='h3'>
                <Translations text='section3.omic' />
              </Typography>
            </Stack>
            <Typography variant='body1'>
              <Translations text='section3.poopie' />
            </Typography>
            <ul style={{ listStyle: 'disc', paddingLeft: '30px', marginBottom: '50px' }}>
              <li>
                <Typography variant='body1'>
                  <Translations text='section3.li1' />
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  <Translations text='section3.li2' />
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  <Translations text='section3.li3' />
                </Typography>
              </li>
              <li>
                <Typography variant='body1'>
                  <Translations text='section3.li4' />
                </Typography>
              </li>
            </ul>
            <Button
              endIcon={<AppIcon name='rise' />}
              size='large'
              sx={theme => ({
                [theme.breakpoints.down('md')]: {
                  width: '100%'
                }
              })}
            >
              <Translations text='section3.buy' />
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', mb: '150px' }}>
            <Box width='60%' ml='20%' zIndex={10} position='relative'>
              <LazyLoadImage src='./assets/img/hanger.webp' alt='hanger' width='100%' />
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '48%',
                minHeight: '200px',
                ml: '26%',
                mt: '-10px',
                zIndex: 9,
                backgroundImage: "url('./assets/img/tokenomic.webp')",
                backgroundSize: '100% 100%',
                paddingTop: '20px',
                paddingBottom: '30px',
                textAlign: 'center'
              }}
            >
              <Box
                component='img'
                src='./assets/img/logo.webp'
                alt='logo'
                m='auto'
                width='clamp(4.4375rem, 3.1391rem + 5.5399vw, 8.125rem)'
                height='clamp(4.4375rem, 3.1391rem + 5.5399vw, 8.125rem)'
              />
              <Typography
                component='h6'
                variant='h6'
                sx={{
                  color: '#000',
                  fontSize: 'clamp(2.5625rem, 1.6602rem + 3.8498vw, 5.125rem)'
                }}
              >
                100%
              </Typography>
              <Typography
                component='h6'
                variant='h6'
                sx={{
                  color: '#000',
                  fontSize: 'clamp(1rem, 0.6479rem + 1.5023vw, 2rem)',
                  fontWeight: 0,
                  mt: { xs: 0, md: '-30px' }
                }}
              >
                <Translations text='section3.from' />
              </Typography>
            </Box>
            <Box
              sx={theme => ({
                position: 'absolute',
                top: '50%',
                left: '5%',
                width: '100px',
                height: '50px',
                [theme.breakpoints.up('md')]: {
                  display: 'none'
                }
              })}
            >
              <AppIcon name='cloud' />
            </Box>
            <Box
              sx={theme => ({
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '80px',
                height: '30px',
                [theme.breakpoints.up('md')]: {
                  display: 'none'
                }
              })}
            >
              <AppIcon name='cloud' />
            </Box>
            <Box
              sx={theme => ({
                position: 'absolute',
                top: '45%',
                left: '6%',
                width: '30px',
                height: '30px',
                [theme.breakpoints.up('md')]: {
                  display: 'none'
                }
              })}
            >
              <AppIcon name='whiteStar' />
            </Box>
            <Box
              sx={theme => ({
                position: 'absolute',
                bottom: '30%',
                right: '5%',
                width: '30px',
                height: '30px',
                [theme.breakpoints.up('md')]: {
                  display: 'none'
                }
              })}
            >
              <AppIcon name='yellowStar' />
            </Box>
            <Box
              sx={theme => ({
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '15px',
                height: '15px',
                [theme.breakpoints.up('md')]: {
                  display: 'none'
                }
              })}
            >
              <AppIcon name='whiteStar' />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SectionDivider />
    </Box>
  )
}
