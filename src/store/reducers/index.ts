import { combineReducers } from '@reduxjs/toolkit'

import notification from './notification'
import auth from './auth'

const reducer = combineReducers({
  auth,
  notification
})

export default reducer
