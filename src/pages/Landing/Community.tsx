import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import XIcon from '@mui/icons-material/X'

import Translations from '@/components/Translations'
import Section from './Section'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'

export default function Community() {
  return (
    <Section id='community' sx={{ backgroundColor: 'background.default' }}>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: colors.communityBg,
          borderRadius: '50px',
          textAlign: 'center',
          py: '150px'
        }}
      >
        <Container maxWidth='xl' sx={{ position: 'relative', zIndex: 11 }}>
          <Box position='relative'>
            <Typography
              component='h3'
              variant='h3'
              sx={{
                fontSize: 'clamp(3.4375rem, 2.2271rem + 5.1643vw, 6.875rem)',
                textTransform: 'uppercase',
                mb: '24px',
                color: colors.black,
                fontWeight: '800',
                letterSpacing: '7.7px'
              }}
              position='relative'
              zIndex={10}
            >
              <Translations text='section7.description' />
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                right: 'clamp(0rem, -3.9613rem + 16.9014vw, 11.25rem)',
                bottom: 'clamp(0rem, 8.4507rem - 9.3897vw, 6.25rem)',
                width: 'clamp(5.625rem, 4.3046rem + 5.6338vw, 9.375rem)',
                zIndex: 9
              }}
            >
              <LazyLoadImage src='./assets/img/commode.webp' alt='commode' />
            </Box>
          </Box>
          <Typography variant='body1' color={colors.black14} mb='50px'>
            <Translations text='section7.join' />
          </Typography>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              gap: '24px'
            }}
          >
            <Button color='info' size='large' endIcon={<AppIcon name='discord' />} sx={{ borderColor: colors.black }}>
              DISCORD
            </Button>
            <Button color='info' size='large' endIcon={<XIcon />} sx={{ borderColor: colors.black }}>
              TWITTER/X
            </Button>
          </Stack>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            right: '30px',
            bottom: 0,
            width: 'clamp(5.75rem, 4.1435rem + 6.8545vw, 10.3125rem)',
            zIndex: 1
          }}
        >
          <LazyLoadImage src='./assets/img/human.webp' alt='human' />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: 'clamp(1rem, -17.8697rem + 76.2441vw, 50.75rem)',
            top: 'clamp(1.3125rem, 1.0924rem + 0.939vw, 1.9375rem)',
            transform: 'rotate(-30deg)',
            width: 'clamp(5.75rem, 4.1435rem + 6.8545vw, 10.3125rem)',
            zIndex: 12
          }}
        >
          <LazyLoadImage src='./assets/img/poope-coin.webp' alt='human' />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            zIndex: '1',
            width: 'clamp(4.3125rem, 2.3539rem + 8.3568vw, 9.875rem)',
            height: 'clamp(3rem, 1.5915rem + 6.0094vw, 7rem)',
            top: 'clamp(21.875rem, 19.6743rem + 9.3897vw, 28.125rem)',
            left: 'clamp(0.875rem, -1.4137rem + 9.7653vw, 7.375rem)'
          }}
        >
          <AppIcon name='cloud' />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            zIndex: '1',
            width: 'clamp(1.0625rem, 0.5343rem + 2.2535vw, 2.5625rem)',
            height: 'clamp(1.0625rem, 0.5343rem + 2.2535vw, 2.5625rem)',
            top: 'clamp(20.3125rem, 18.794rem + 6.4789vw, 24.625rem)',
            left: 'clamp(0.9375rem, -1.8354rem + 11.831vw, 8.8125rem)'
          }}
        >
          <AppIcon name='whiteStar' />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            zIndex: '1',
            width: '12px',
            height: '12px',
            top: 'clamp(16.0125rem, 13.4025rem + 11.1362vw, 23.425rem)',
            left: 'clamp(0rem, -2.8917rem + 12.338vw, 8.2125rem)'
          }}
        >
          <AppIcon name='blackStar' />
        </Box>
      </Box>
    </Section>
  )
}
