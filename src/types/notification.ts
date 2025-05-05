export interface NotificationType {
  id: number
  title: string
  content: string
  createdAt: string
  isNew: boolean
}

export interface NotificationResponse {
  data: NotificationType[]
}

export interface NotificationState {
  notifications: NotificationType[]
  newsCount: number
}
