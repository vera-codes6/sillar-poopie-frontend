import { Box, Stack, Typography } from '@mui/material'

import DashboardChart from './DashoardChart'
import Translations from '@/components/Translations'
import BuyPoopie from './BuyPoopie'
import TransHistory from './TransHistory'
import BalanceBox from './BalanceBox'
import FeatureBox from './FeatureBox'
import AppIcon from '@/components/AppIcon'

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        padding: { xs: '152px 20px 16px 20px', lg: '134px 24px 24px 32px' },
        width: '100%',
        gap: '24px'
      }}
    >
      <Stack direction='column' sx={{ gap: { xs: '24px', lg: '60px' }, width: { xs: '100%', lg: '70%' } }}>
        <Stack direction='column' spacing='16px'>
          <Typography component='h5' sx={{ fontSize: '18px', fontWeight: 400, mb: '16px' }}>
            <Translations text='home.total' />
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: { xs: 'flex-start', lg: 'space-between' },
              gap: { xs: '14px', lg: '0' }
            }}
          >
            <Stack direction='row' sx={{ gap: { xs: '14px', lg: '19px', alignItems: 'end' } }}>
              <Typography component='h5' variant='h5' sx={{ fontSize: { xs: '50px', lg: '60px' }, fontWeight: 400 }}>
                54,860
              </Typography>
              <Typography
                component='h5'
                variant='h5'
                sx={{ fontSize: '32px', fontWeight: 400, display: { xs: 'none', lg: 'block' } }}
              >
                $POOPE
              </Typography>
              <Typography
                component='h5'
                variant='h5'
                sx={{ fontSize: '24px', fontWeight: 400, display: { xs: 'block', lg: 'none' } }}
              >
                $POI
              </Typography>
            </Stack>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: { xs: '14px', lg: '19px' },
                alignItems: { xs: 'top', lg: 'end' }
              }}
            >
              <Typography
                component='h5'
                variant='h5'
                sx={{ fontSize: { xs: '16px', lg: '24px' }, fontWeight: 400, color: '#747474' }}
              >
                $62,340.48
              </Typography>
              <Box
                component='span'
                sx={theme => ({
                  borderRadius: '32px',
                  border: '1px solid #2EBE7B',
                  py: '6px',
                  display: 'flex',
                  fontSize: '14px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  ...theme.applyStyles('dark', {
                    color: '#2EBE7B',
                    background: 'rgba(46, 190, 123, 0.08)'
                  }),
                  ...theme.applyStyles('light', {
                    color: '#FFF',
                    background: '#2EBE7B'
                  })
                })}
              >
                +1.2%
                <AppIcon name='rise' />
              </Box>
            </Box>
          </Box>
        </Stack>
        <BalanceBox />
        <DashboardChart />
        <FeatureBox />
      </Stack>
      <Stack direction='column' spacing='24px' sx={{ width: { xs: '100%', lg: '30%' } }}>
        <BuyPoopie />
        <TransHistory />
      </Stack>
    </Box>
  )
}
