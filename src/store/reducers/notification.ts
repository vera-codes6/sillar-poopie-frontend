import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NotificationState, NotificationType } from '@/types/notification'

const initialState: NotificationState = {
  notifications: [],
  newsCount: 0
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    pushNotification(state, action: PayloadAction<NotificationType>) {
      state.notifications.unshift(action.payload)
      state.newsCount++
    },
    pushNotifications(state, action: PayloadAction<NotificationState['notifications']>) {
      state.notifications = action.payload
      state.newsCount = state.notifications.filter(item => item.isNew).length
    },
    markNotificationAsRead(state, action: PayloadAction<number>) {
      const updatedList = state.notifications.map(item => {
        const newItem = item
        newItem.isNew = action.payload == 0 || item.id == action.payload ? false : item.isNew
        return newItem
      })
      state.notifications = updatedList
      state.newsCount = action.payload == 0 ? 0 : state.newsCount - 1
    }
  }
})

export default notificationSlice.reducer

export const { pushNotification, pushNotifications, markNotificationAsRead } = notificationSlice.actions
