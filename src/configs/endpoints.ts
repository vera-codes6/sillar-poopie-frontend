import { NOTIFICATION } from '@/constants/sidebar'

export const API_ENDPOINTS = {
  USERS: {
    LOGIN: 'Users/Login',
    REGISTER: 'Users/Register',
    VERIFY: 'Users/Verify'
  },
  TRANSACTIONS: {
    GET: 'Transactions'
  },
  PRICE: {
    GET: 'Price'
  },
  TRANS: {
    GET: 'Transactions'
  },
  NOTIFICATION: {
    GET: 'Notification',
    MARK_NOTIFICATION: 'Notification/Mark',
    MARK_ALL: 'Notification/MarkAll'
  }
}
