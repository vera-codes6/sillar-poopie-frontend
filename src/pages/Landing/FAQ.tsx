import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import Translations from '@/components/Translations'
import ButtonGroup from '@/components/Button/ButtonGroup'
import CustomizedAccordions from '@/components/Accordion'
import SectionDivider from '@/components/SectionDivider'
import Section from './Section'
import { accordionContext } from '@/constants/accordionContext'
import { colors } from '@/theme/themePrimitives'

export default function FAQSection() {
  return (
    <Section id='faq' py='150px' position='relative' zIndex={5}>
      <Container maxWidth='xl' sx={{ position: 'relative', zIndex: 5 }}>
        <Grid sx={{ alignItmes: 'center', mb: '50px' }} container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1} direction='row'>
              <Typography component='h3' variant='h3'>
                <Translations text='section5.findout' />
              </Typography>
              <Typography component='h3' variant='h3' color={colors.yellowText}>
                <Translations text='section5.more' />
              </Typography>
            </Stack>
          </Grid>
          <Grid size={6}>
            <Stack
              direction='row'
              spacing='24px'
              justifyContent='flex-end'
              alignItems='center'
              sx={theme => ({
                [theme.breakpoints.down('md')]: {
                  display: 'none'
                }
              })}
            >
              <Typography variant='body1' color='primary.contrastText' width='260px'>
                <Translations text='section5.lookingfor' />
              </Typography>
              <Button variant='outlined' size='medium'>
                <Translations text='section5.viewmore' />
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing='50px' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <ButtonGroup />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {accordionContext.map((context, index) => (
              <CustomizedAccordions key={`accgroup${index}`} data={context} />
            ))}

            <Stack
              direction='column'
              spacing='24px'
              justifyContent='center'
              alignItems='center'
              sx={theme => ({
                mt: '24px',
                [theme.breakpoints.up('md')]: {
                  display: 'none'
                }
              })}
            >
              <Typography variant='body1' color='primary.contrastText' width='260px' textAlign='center'>
                <Translations text='section5.lookingfor' />
              </Typography>
              <Button variant='outlined' size='medium'>
                <Translations text='section5.viewmore' />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SectionDivider />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: { xs: '700px', md: '500px' },
          width: { xs: '160px', md: '506px' },
          zIndex: 4
        }}
      >
        <LazyLoadImage src='./assets/img/hand.webp' alt='hand' />
      </Box>
    </Section>
  )
}
