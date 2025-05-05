import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Button, Container, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

import Translations from '@/components/Translations'
import { orange } from '@/theme/themePrimitives'
import Section from './Section'
import AppIcon from '@/components/AppIcon'

export default function About() {
  return (
    <Section id='about' sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth='xl'>
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Stack
            direction='column'
            spacing='50px'
            sx={{
              width: { xs: '100%', md: '60%' }
            }}
          >
            <Stack direction='row' spacing='10px'>
              <Typography component='h3' variant='h3' color='text.primary'>
                <Translations text='section2.about' />
              </Typography>
              <Typography component='h3' variant='h3' color={orange[300]}>
                <Translations text='section2.poopecoin' />
              </Typography>
            </Stack>
            <Typography color='text.primary'>
              <Translations text='section2.description' />
            </Typography>
            <Stack
              sx={theme => ({
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column'
                }
              })}
            >
              <Button size='large' endIcon={<AppIcon name='rise' />}>
                <Translations text='section2.buy_poope' />
              </Button>
              <Button size='large' endIcon={<AppIcon name='fall' />} color='info'>
                <Translations text='section2.read_more' />
              </Button>
            </Stack>
          </Stack>
          <Box
            sx={{
              width: { xs: '100%', md: '40%' }
            }}
          >
            <LazyLoadImage alt='toilet open' src='./assets/img/toilet-open.webp' width='100%' />
          </Box>
        </Stack>
      </Container>
    </Section>
  )
}
