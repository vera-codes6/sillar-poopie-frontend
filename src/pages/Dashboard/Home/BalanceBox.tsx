import Translations from '@/components/Translations'
import { colors } from '@/theme/themePrimitives'
import { Box, IconButton, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { balanceVaules } from '@/constants/dashboard'
import AppIcon from '@/components/AppIcon'

const CircleButton = styled(IconButton)(({ theme }) => ({
  color: colors.white,
  padding: '12px',
  background: `${colors.black34} !important`,
  ...theme.applyStyles('light', {
    background: `${colors.black} !important`,
    border: `2px solid ${colors.white}`
  })
}))

export default function BalanceBox() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: { xs: 'flex-start', lg: 'space-between' },
        gap: { xs: '24px', lg: '0' },
        alignItems: { lg: 'center', xs: 'top' }
      }}
    >
      <Stack
        direction='row'
        sx={{
          justifyContent: { xs: 'space-between', lg: 'flex-start' },
          gap: { xs: 0, lg: '32px' }
        }}
      >
        {balanceVaules.map((data, index) => (
          <React.Fragment key={`frag${index}`}>
            <Box key={`balance${index}`}>
              <Typography
                component='h5'
                variant='h5'
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: colors.black74
                }}
              >
                <Translations text={data.title} />
              </Typography>
              <Typography
                component='h5'
                variant='h5'
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  mt: '2px'
                }}
              >
                {data.value}%
                {data.value >= 0 ? (
                  <Box sx={{ ml: '8px' }}>
                    <AppIcon name='rise' color='rise' />
                  </Box>
                ) : (
                  <Box sx={{ ml: '8px' }}>
                    <AppIcon name='fall' color='fall' />
                  </Box>
                )}
              </Typography>
            </Box>
            {index < 2 ? (
              <Box
                key={`balanceDivider${index}`}
                sx={{ width: '2px', height: '58px', backgroundColor: colors.black74 }}
              />
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </Stack>
      <Stack
        direction='row'
        spacing='24px'
        sx={{
          justifyContent: { xs: 'space-between', lg: 'flex-start' },
          mx: { xs: '22px', lg: 0 }
        }}
      >
        <Stack direction='column' spacing='8px' alignItems='center'>
          <CircleButton>
            <AppIcon name='add' />
          </CircleButton>
          <Typography component='h5' variant='h5' fontSize='14px'>
            <Translations text='buylabel' />
          </Typography>
        </Stack>

        <Stack direction='column' spacing='8px' alignItems='center'>
          <CircleButton>
            <AppIcon name='south' />
          </CircleButton>
          <Typography component='h5' variant='h5' fontSize='14px'>
            <Translations text='withdraw' />
          </Typography>
        </Stack>
        <Stack direction='column' spacing='8px' alignItems='center'>
          <CircleButton>
            <AppIcon name='swap' />
          </CircleButton>
          <Typography component='h5' variant='h5' fontSize='14px'>
            <Translations text='convert' />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
