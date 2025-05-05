import AppIcon from '@/components/AppIcon'
import { colors } from '@/theme/themePrimitives'
import { NotificationType } from '@/types/notification'
import { Box, Stack, Typography } from '@mui/material'
import moment from 'moment'

interface Props {
  data: NotificationType
  markNotification: (id: number) => void
}

export default function NotificationItem({ data, markNotification }: Props) {
  const handleClick = async () => {
    if (data.isNew) {
      markNotification(data.id)
    }
  }

  return (
    <Stack
      direction='row'
      sx={theme => ({
        ...theme.applyStyles('dark', {
          backgroundColor: data.isNew ? '#FFD25829' : colors.black1A
        }),
        ...theme.applyStyles('light', {
          backgroundColor: data.isNew ? '#FFD2583D' : colors.white
        }),
        padding: '15px',
        gap: '10px',
        borderRadius: '6px'
      })}
      onClick={handleClick}
    >
      <Box>
        <Box sx={{ borderRadius: '100%', padding: '10px', backgroundColor: data.isNew ? '#FFD25829' : '#74747429' }}>
          <AppIcon name='add' />
        </Box>
      </Box>
      <Stack direction='column'>
        <Typography component='h5' variant='h5'>
          {data.title}
        </Typography>
        <Typography component='p' sx={{ fontSize: '14px' }}>
          {data.content}
        </Typography>
        <Typography
          component='p'
          sx={theme => ({
            ...theme.applyStyles('dark', {
              color: '#FFD258'
            }),
            ...theme.applyStyles('light', {
              color: '#5B3318'
            }),
            fontSize: '14px'
          })}
        >
          {moment(data.createdAt).fromNow()}
        </Typography>
      </Stack>
    </Stack>
  )
}
