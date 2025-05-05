import Translations from '@/components/Translations'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function FeatureBox() {
  return (
    <Stack
      direction='row'
      spacing='16px'
      sx={theme => ({
        position: 'relative',
        borderRadius: '8px',
        flexShrink: 0,
        alignSelf: 'stretch',
        padding: '24px',
        ...theme.applyStyles('dark', {
          border: '1px solid #343434',
          background: '#191919'
        }),
        ...theme.applyStyles('light', {
          border: '1px solid #FFF',
          background: '#FFF'
        })
      })}
    >
      <Box
        component='img'
        alt='Abstract'
        src='./assets/img/abstract.webp'
        sx={{
          position: { xs: 'static', lg: 'absolute' },
          left: 0,
          bottom: '24px',
          alignSelf: 'start'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: { lg: 'space-between' },
          gap: '24px',
          width: '100%',
          pl: { xs: 0, lg: '90px' },
          alignItems: { xs: 'top', lg: 'center' }
        }}
      >
        <Box>
          <Typography
            component='h5'
            variant='h5'
            sx={{
              fontSize: '18px',
              fontWeight: 600
            }}
          >
            <Translations text='featuretitle' />
          </Typography>
          <Typography
            component='h5'
            variant='h5'
            sx={{
              fontSize: '10px',
              fontWeight: 400
            }}
          >
            <Translations text='featurecontent' />
          </Typography>
        </Box>
        <Button
          sx={theme => ({
            padding: '8px 20px',
            borderRadius: '100px',
            fontSize: '14px',
            background: '#FFF',
            color: '#000',
            ...theme.applyStyles('light', {
              background: '#000',
              color: '#FFF'
            })
          })}
        >
          <Translations text='letsee' />
        </Button>
      </Box>
    </Stack>
  )
}
