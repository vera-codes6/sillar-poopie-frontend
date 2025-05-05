import { Button, Stack, styled, Typography } from '@mui/material'
import { useEffect } from 'react'

import { NotificationResponse } from '@/types/notification'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'
import { fetchNotifications, markAll } from '@/services/notificationServices'
import { handleError } from '@/utils'
import { dispatch, markNotificationAsRead, pushNotifications, useSelector } from '@/store'
import NotificationBox from './NotificationBox'

const CustomButton = styled(Button)(({ theme }) => ({
  ...theme.applyStyles('dark', {
    backgroundColor: colors.black19,
    color: '#FFD258'
  }),
  ...theme.applyStyles('light', {
    backgroundColor: colors.white,
    color: colors.black
  }),
  borderRadius: '6px',
  padding: '10px',
  border: 'none'
}))

export default function Notification() {
  const { newsCount } = useSelector(store => store.notification)

  const markAllNotifications = async () => {
    try {
      await markAll()
      dispatch(markNotificationAsRead(0))
    } catch (e) {
      handleError(e)
    }
  }

  return (
    <Stack
      sx={{
        padding: { xs: '152px 20px 16px 20px', lg: '134px 24px 24px 32px' },
        width: '100%',
        gap: '24px'
      }}
    >
      <Stack direction='row' justifyContent='space-between'>
        <Typography component='p' color={colors.black74} fontSize='20px'>
          You have {newsCount} new notification
        </Typography>
        <Stack direction='row' gap={2}>
          <CustomButton startIcon={<AppIcon name='check' />} onClick={markAllNotifications}>
            Mark all as read
          </CustomButton>
          <CustomButton endIcon={<AppIcon name='down' />} color='primary'>
            Newest
          </CustomButton>
        </Stack>
      </Stack>
      <NotificationBox />
    </Stack>
  )
}
