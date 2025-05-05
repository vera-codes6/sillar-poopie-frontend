import { Box, Container, Stack, Typography } from '@mui/material'

import Translations from '@/components/Translations'
import Section from './Section'
import { colors } from '@/theme/themePrimitives'

export default function Roadmap() {
  return (
    <Section id='roadmap' pt='150px' pb='150px'>
      <Container maxWidth='xl'>
        <Stack direction='row' spacing='10px' textAlign='center' mb='24px' justifyContent='center'>
          <Typography component='h3' variant='h3'>
            <Translations text='section4.our' />
          </Typography>
          <Typography component='h3' variant='h3' color={colors.yellowText}>
            <Translations text='section4.roadmap' />
          </Typography>
        </Stack>
        <Typography variant='body1' textAlign='center' mb='50px'>
          <Translations text='section4.description' />
        </Typography>
      </Container>
      <Stack
        direction='row'
        sx={theme => ({
          overflowX: 'auto',
          overflowY: 'hidden',
          boxSizing: 'border-box',
          height: '250px',
          [theme.breakpoints.up('xl')]: {
            float: 'right'
          },
          [theme.breakpoints.down('xl')]: {
            width: '100%'
          },
          '&::-webkit-scrollbar': {
            height: 0
          }
        })}
      >
        <Box
          minWidth='320px'
          sx={{
            backgroundImage: "url('./assets/img/single-paper.webp')",
            backgroundSize: '100% 100%',
            p: '21.24px 40px'
          }}
        >
          <h6 className='phase-title'>
            <Stack direction='row' spacing='20px'>
              <Translations text='section4.phase' />1
            </Stack>
          </h6>
          <ul className='phase-ul'>
            <li>
              <Translations text='section4.phase1.li1' />
            </li>
            <li>
              <Translations text='section4.phase1.li2' />
            </li>
            <li>
              <Translations text='section4.phase1.li3' />
            </li>
          </ul>
        </Box>
        <Box
          minWidth='320px'
          sx={{
            backgroundImage: "url('./assets/img/single-paper.webp')",
            backgroundSize: '100% 100%',
            p: '21.24px 40px'
          }}
        >
          <h6 className='phase-title'>
            <Stack direction='row' spacing='20px'>
              <Translations text='section4.phase' />2
            </Stack>
          </h6>
          <ul className='phase-ul'>
            <li>
              <Translations text='section4.phase2.li1' />
            </li>
            <li>
              <Translations text='section4.phase2.li2' />
            </li>
            <li>
              <Translations text='section4.phase2.li3' />
            </li>
          </ul>
        </Box>
        <Stack
          direction='row'
          sx={{
            backgroundImage: "url('./assets/img/long-paper.webp')",
            backgroundSize: '100% 100%',
            p: '21.24px 40px'
          }}
          maxHeight='350px'
        >
          <Box minWidth='320px'>
            <h6 className='phase-title'>
              <Stack direction='row' spacing='20px'>
                <Translations text='section4.phase' />3
              </Stack>
            </h6>
            <ul className='phase-ul'>
              <li>
                <Translations text='section4.phase3.li1' />
              </li>
              <li>
                <Translations text='section4.phase3.li2' />
              </li>
            </ul>
          </Box>
          <Box minWidth='320px'>
            <h6 className='phase-title'>
              <Stack direction='row' spacing='20px'>
                <Translations text='section4.phase' />4
              </Stack>
            </h6>
            <ul className='phase-ul'>
              <li>
                <Translations text='section4.phase4.li1' />
              </li>
              <li>
                <Translations text='section4.phase4.li2' />
              </li>
              <li>
                <Translations text='section4.phase4.li3' />
              </li>
            </ul>
          </Box>
        </Stack>
        <Box
          component='img'
          src='./assets/img/paper-roll.webp'
          alt='paper roll'
          sx={{ height: '270px', marginTop: '-10px', marginLeft: '-20px' }}
        />
      </Stack>
    </Section>
  )
}
