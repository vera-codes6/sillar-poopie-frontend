import AppIcon from '@/components/AppIcon'
import { StrokeButton } from '@/components/Button/StrokeButton'
import { GrayBox, GrayInput, TokenPicker } from '@/components/GrayBox'
import Translations from '@/components/Translations'
import { colors } from '@/theme/themePrimitives'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function BuyPoopie() {
  return (
    <GrayBox
      sx={{
        padding: '16px',
        gap: '24px',
        textAlign: 'center'
      }}
    >
      <Stack direction='row' justifyContent='space-between'>
        <Typography component='h5' variant='h5' sx={{ fontSize: '20px', fontWeight: 600 }}>
          <Translations text='home.buypoopie' />
        </Typography>
        <StrokeButton startIcon={<AppIcon name='add' />}>
          <Translations text='buylabel' />
        </StrokeButton>
      </Stack>
      <GrayInput>
        <input style={{ width: '50%' }} />
        <Stack direction='row' alignItems='center'>
          <StrokeButton>
            <Translations text='home.max' />
          </StrokeButton>
          <TokenPicker />
        </Stack>
      </GrayInput>
      <GrayInput>
        <input style={{ width: '50%' }} />
        <Stack direction='row' alignItems='center' spacing='5px'>
          <Box component='img' alt='logo' src='./assets/img/logo.webp' width='18px' height='18px' />
          <Typography
            component='h5'
            variant='h5'
            sx={{
              color: colors.black74,
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            $POOPE
          </Typography>
        </Stack>
      </GrayInput>
      <Box>
        <Typography
          component='span'
          variant='h5'
          sx={theme => ({
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.7)',
            ...theme.applyStyles('light', { color: '#141414' })
          })}
        >
          1 USDT = 100 $POI
        </Typography>
        <Stack
          direction='row'
          sx={theme => ({
            justifyContent: 'center',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.7)',
            ...theme.applyStyles('light', { color: '#141414' })
          })}
        >
          <Translations text='home.fee' />
          0.20$
        </Stack>
      </Box>
      <Button sx={{ width: '100%', textTransform: 'uppercase' }} size='medium'>
        <Translations text='buylabel' />
      </Button>
    </GrayBox>
  )
}
