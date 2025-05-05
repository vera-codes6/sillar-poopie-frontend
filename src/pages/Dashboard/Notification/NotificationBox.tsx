import { Stack } from '@mui/material'
import { useEffect } from 'react'

import NotificationItem from './NotificationItem'
import { NotificationType } from '@/types/notification'
import { markNotificationById } from '@/services/notificationServices'
import { handleError } from '@/utils'
import { dispatch, markNotificationAsRead, pushNotifications, useSelector } from '@/store'
import { NotificationResponse } from '@/types/notification'
import { fetchNotifications } from '@/services/notificationServices'

export default function NotificationBox() {
  const { notifications } = useSelector(store => store.notification)

  const markNotification = async (id: number) => {
    try {
      await markNotificationById(id)
      dispatch(markNotificationAsRead(id))
    } catch (e) {
      handleError(e)
    }
  }

  const init = async () => {
    try {
      var response = await fetchNotifications()
      dispatch(pushNotifications((response as NotificationResponse).data))
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Stack gap={2} width='100%'>
      {notifications.map((notification, index) => (
        <NotificationItem
          key={`notification${index}`}
          data={notification as NotificationType}
          markNotification={markNotification}
        ></NotificationItem>
      ))}
    </Stack>
  )
}
