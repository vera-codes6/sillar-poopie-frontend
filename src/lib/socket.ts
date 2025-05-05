import * as signalR from '@microsoft/signalr'

import { SOCKET_SERVER_URL } from '@/configs'
import { dispatch, pushNotification } from '@/store'
import { toast } from 'react-toastify'
import { handleError } from '@/utils'
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn'

export const connectSocket = async () => {
  try {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(SOCKET_SERVER_URL, { withCredentials: false })
      .withAutomaticReconnect()
      .build()

    await connection.start()

    connection.on('ReceiveNotification', notification => {
      toast('New Notification', { type: 'info' })
      dispatch(pushNotification(notification))
    })
  } catch (error) {
    handleError(null, 'Socket Error')
  }
}
