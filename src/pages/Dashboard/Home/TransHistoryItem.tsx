import { Box, Stack, Typography } from '@mui/material'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import moment from 'moment'

import { colors } from '@/theme/themePrimitives'
import { TransactionType } from '@/types/transaction'

interface Props {
  data: TransactionType
}

export default function TransHistoryItem({ data }: Props) {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <Typography
        component='h5'
        variant='h5'
        sx={theme => ({
          color: colors.black74,
          fontSize: '14px',
          fontWeight: 400,
          ...theme.applyStyles('light', {
            color: colors.black14
          })
        })}
      >
        {moment(data.date).fromNow()}
      </Typography>
      <Typography
        component='h5'
        variant='h5'
        sx={{
          color: data.amount >= 0 ? colors.rise : colors.fall,
          fontSize: '14px',
          fontWeight: 400
        }}
      >
        {data.amount}&nbsp;$POI
      </Typography>
      <Stack direction='row' alignItems='center' sx={{ color: colors.black74 }}>
        <Box
          component='span'
          sx={theme => ({
            borderRadius: '100px',
            background: colors.black14,
            fontSize: '12px',
            fontWeight: 400,
            padding: '0 10px',
            ...theme.applyStyles('light', {
              background: 'rgba(20,20,20,0.12)'
            })
          })}
        >
          {data.status}
        </Box>
        <KeyboardArrowRightRoundedIcon />
      </Stack>
    </Stack>
  )
}
