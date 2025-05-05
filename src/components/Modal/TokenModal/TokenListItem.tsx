import { Box, IconButton, Stack, Typography } from '@mui/material'
import { COPY, SELECT, tempTokens } from '@/constants/tokenModal'
import AppIcon from '@/components/AppIcon'
import { colors } from '@/theme/themePrimitives'

interface Props {
  data: (typeof tempTokens)[0]
  handleAction: (action: string, data: string) => void
}

export default function TokenListItem({ data, handleAction }: Props) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      onClick={() => handleAction(SELECT, data.name)}
    >
      <Stack direction='row' alignItems='center' spacing='8px'>
        <Box
          sx={theme => ({
            padding: '8px',
            borderRadius: '100px',
            border: `1px solid ${colors.black31}`,
            background: colors.black14,
            ...theme.applyStyles('light', {
              border: '1px solid #DEC29E',
              background: colors.white
            })
          })}
        >
          <AppIcon name='usdt' />
        </Box>
        <Stack direction='column' spacing='8px'>
          <Stack direction='row' spacing='4px' alignItems='center'>
            <Typography variant='body1' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontWeight: 500 }}>
              {data.name}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: colors.black74,
                fontSize: { xs: '12px', lg: { xs: '12px', lg: '14px' } },
                fontWeight: 500
              }}
            >
              ({data.label})
            </Typography>
          </Stack>
          <Stack direction='row' spacing='8px' sx={{ color: colors.black74 }}>
            <Typography
              variant='body1'
              sx={{
                width: '122px',
                textOverflow: 'ellipsis',
                fontSize: { xs: '12px', lg: '14px' },
                overflow: 'hidden'
              }}
            >
              {data.tokenStr}
            </Typography>
            <IconButton size='small' onClick={() => handleAction(COPY, data.tokenStr)}>
              <AppIcon name='copy' size='15px' color={'black74'} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='column' spacing='4px' alignItems='flex-end'>
        <Typography variant='body1' sx={{ fontSize: { xs: '14px', lg: '18px' }, fontWeight: 500 }}>
          {data.value1}
        </Typography>
        <Typography variant='body1' sx={{ fontSize: { xs: '12px', lg: '14px' }, color: colors.black74 }}>
          ~$&nbsp;{data.value2}
        </Typography>
      </Stack>
    </Box>
  )
}
